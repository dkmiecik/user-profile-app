import { transformToLabel, mapFormDataToModel } from './transformers';

describe('transformers', () => {
  describe('transformToLabel', () => {
    it('should transform camelCase string to upperCase text', () => {
      expect(transformToLabel('firstName')).toEqual('First Name');
      expect(transformToLabel('firstNameLastName')).toEqual('First Name Last Name');
      expect(transformToLabel('firstName lastName')).toEqual('First Name last Name');
    });
  });

  describe('mapFormDataToModel', () => {
    it('should transform form data to IData model', () => {
      const form = new FormData();
      form.append('firstName', 'John');
      form.append('lastName', 'Doe');
      expect(mapFormDataToModel(form)).toEqual({
        firstName: 'John',
        lastName: 'Doe',
      });
    });
  });
});
