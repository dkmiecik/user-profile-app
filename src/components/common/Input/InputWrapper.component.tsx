import React from 'react';

import { FileInput } from './components/FileInput.component';
import { TextInput } from './components/TextInput.component';

import { IInput } from './types/input.model';

type InputProps = IInput;

export const InputWrapper: React.FC<InputProps> = (props) => {
  return <>{props.type === 'file' ? <FileInput {...props} /> : <TextInput {...props} />}</>;
};
