import React from 'react';
import { useHistory } from 'react-router-dom';
import { API } from '../../utils/api';
import { useProfile } from '../ProfileContext';
import { IFormInput } from './types/form.model';
import { FormDefinition } from './FormDefinition.component';
import { Section } from '../common/Section/Section.component';
import { mapFormDataToModel } from '../../utils/transformers';
import {
  validateEmail,
  validatePhoneNumber,
  validateName,
  validateDate,
} from '../../utils/validators';

const formDefinition: IFormInput[] = [
  {
    id: 'firstName',
    name: 'firstName',
    label: 'First Name',
    required: true,
    type: 'text',
    validator: validateName,
  },
  {
    id: 'lastName',
    name: 'lastName',
    label: 'Last Name',
    required: true,
    type: 'text',
    validator: validateName,
  },
  {
    id: 'email',
    name: 'email',
    label: 'Email address',
    required: true,
    type: 'email',
    validator: validateEmail,
  },
  {
    id: 'phone',
    name: 'phone',
    label: 'Phone number',
    required: true,
    type: 'tel',
    validator: validatePhoneNumber,
  },
  {
    id: 'birthday',
    name: 'birthday',
    label: 'Birthday date',
    required: true,
    type: 'date',
    validator: validateDate,
  },
  {
    id: 'about',
    name: 'about',
    label: 'About',
    required: false,
    type: 'text',
  },
];

const avatarDefinition: IFormInput = {
  id: 'avatar',
  name: 'avatar',
  label: 'Avatar',
  required: true,
  type: 'file',
};

export const FormWrapper: React.FC = () => {
  const history = useHistory();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [invalidValues, setInvalidValues] = React.useState<string[]>([]);
  const { state, dispatch } = useProfile();

  const formValidation = (form: { [key: string]: string }): string[] => {
    return Object.keys(form).filter((key) => {
      const e = formDefinition.find((el) => el.name === key);
      if (e) {
        if (!form[key] || !form[key].length) {
          return e.required;
        } else if (e.validator) {
          return !e.validator(form[key]);
        }
      }

      return false;
    });
  };

  const handleSubmit = React.useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setLoading(true);
      const form = new FormData(event.currentTarget);
      const data = mapFormDataToModel(form);
      const invalid = formValidation(data);
      if (!invalid.length) {
        const response = await API(data);
        dispatch({ type: 'setProfile', state: response });
        setLoading(false);
        history.push('/profile');
      } else {
        setInvalidValues(invalid);
        setLoading(false);
      }
    },
    [history, dispatch],
  );

  const handleCancel = React.useCallback(() => {
    history.push('/profile');
  }, [history]);

  return (
    <Section>
      <h2>Profile edition</h2>
      <FormDefinition
        definition={formDefinition}
        avatar={avatarDefinition}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        loading={loading}
        initialState={state}
        invalidValues={invalidValues}
      />
    </Section>
  );
};

// TODO validation
