export interface IFormInput {
  id: string;
  name: string;
  label: string;
  required: boolean;
  type: string;
  value?: string;
  validator?: (value: string) => boolean;
}
