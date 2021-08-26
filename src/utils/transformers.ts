export interface IData {
  [key: string]: string;
}

export const transformToLabel = (text: string): string => {
  const result = text.replace(/([A-Z])/g, ' $1');
  return result.charAt(0).toUpperCase() + result.slice(1);
};

export const mapFormDataToModel = (form: FormData): IData => {
  const data: IData = {};
  form.forEach((value, key) => (data[key] = value as string));
  return data;
};
