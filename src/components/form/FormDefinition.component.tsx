import React from 'react';

import { IFormInput } from './types/form.model';
import { IProfile } from '../profile/types/profile.model';
import { InputWrapper } from '../common/Input/InputWrapper.component';
import { FileInput } from '../common/Input/components/FileInput.component';
import { Form, FormGroup, FormFields } from '../common/Form/FormGroup.component';
import { Button, ButtonSecondary, ButtonGroup } from '../common/Button/Button.component';
import { Loader, LoaderWrapper } from '../loader/Loader';

interface FormProps {
  loading: boolean;
  definition: IFormInput[];
  avatar: IFormInput;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
  handleCancel: () => void;
  initialState: IProfile;
  invalidValues: string[];
}

export const FormDefinition: React.FC<FormProps> = (props) => {
  const {
    loading,
    definition,
    avatar,
    handleSubmit,
    handleCancel,
    initialState,
    invalidValues,
  } = props;
  return (
    <div>
      {loading && (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}
      <Form onSubmit={handleSubmit} noValidate={true}>
        <FormGroup>
          <FileInput
            id={avatar.id}
            name={avatar.name}
            label={avatar.label}
            required={avatar.required}
          />
          <FormFields>
            {definition.map((field) => (
              <InputWrapper
                key={field.id}
                id={field.id}
                name={field.name}
                label={field.label}
                type={field.type}
                required={field.required}
                defaultValue={initialState[field.id as keyof IProfile]}
                isValid={invalidValues.includes(field.id)}
              />
            ))}
          </FormFields>
        </FormGroup>
        <ButtonGroup>
          <ButtonSecondary type="button" onClick={handleCancel} disabled={loading}>
            Cancel
          </ButtonSecondary>
          <Button type="submit" disabled={loading}>
            Submit
          </Button>
        </ButtonGroup>
      </Form>
    </div>
  );
};
