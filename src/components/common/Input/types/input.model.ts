export interface IInput {
  id: string;
  name: string;
  label: string;
  required: boolean;
  defaultValue?: string | number | Date;
  isValid?: boolean;
  type?: string;
}
