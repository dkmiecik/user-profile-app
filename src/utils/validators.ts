const PHONE_REGEX = /^([+]\d{1,3}[ ])?\d{2,3}[- ]?\d{3}[- ]?(\d{2}[- ]\d{2}|\d{3})$/g;
const EMAIL_MIN_LENGTH = 6;
const EMAIL_MAX_LENGTH = 80;

export const validatePhoneNumber = (value: string): boolean => {
  if (!value) {
    return false;
  }

  const regex = new RegExp(PHONE_REGEX);
  return regex.test(value);
};

const isEmailSubPartValid = (
  startingPart: string,
  regex: RegExp,
  excludedStartAndEndCharacters: RegExp,
): boolean => {
  if (!regex.test(startingPart)) {
    return false;
  }

  if (
    excludedStartAndEndCharacters.test(startingPart.charAt(0)) ||
    excludedStartAndEndCharacters.test(startingPart.charAt(startingPart.length - 1))
  ) {
    return false;
  }

  if (/[.]{2}/.test(startingPart)) {
    return false;
  }

  return true;
};

export const isEmailFormatValid = (value: string): boolean => {
  if (!value) {
    return false;
  }

  const [startingPart, afterAtSignPart, shouldBeEmpty] = value.split('@');

  if (!afterAtSignPart || !startingPart || shouldBeEmpty) {
    return false;
  }

  if (!isEmailSubPartValid(startingPart, /^[A-Za-z0-9+_.-]+$/, /[+_.-]/)) {
    return false;
  }

  if (!isEmailSubPartValid(afterAtSignPart, /^[A-Za-z0-9.-]+$/, /[.-]/)) {
    return false;
  }

  if (!/[.]/.test(afterAtSignPart)) {
    return false;
  }

  const domainSubPart = afterAtSignPart.substr(afterAtSignPart.lastIndexOf('.') + 1);

  if (!/^[A-Za-z]{2,}$/.test(domainSubPart)) {
    return false;
  }

  return true;
};

export const validateEmail = (value: string): boolean => {
  if (!value || value.length < EMAIL_MIN_LENGTH || value.length > EMAIL_MAX_LENGTH) {
    return false;
  }

  return isEmailFormatValid(value);
};
