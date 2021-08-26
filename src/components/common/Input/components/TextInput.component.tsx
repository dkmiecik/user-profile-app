import React from 'react';

import { Group, Label, Input, Error, Required } from '../InputGroup.component';
import { IInput } from '../types/input.model';

type TextInputProps = IInput;

export const TextInput: React.FC<TextInputProps> = (props) => (
  <Group isValid={props.isValid}>
    <Input
      {...props}
      defaultValue={props.defaultValue as string}
      placeholder={props.label}
      autoComplete="none"
      className={props.isValid ? 'invalid' : ''}
    />
    <Label htmlFor={props.id}>
      {props.label}
      {props.required && <Required>*</Required>}
    </Label>

    {props.isValid && <Error>Invalid value!</Error>}
  </Group>
);
