const PHONE_REGEX = /^([+]\d{1,3}[ ])?\d{2,3}[- ]?\d{3}[- ]?(\d{2}[- ]\d{2}|\d{3})$/g;
const EMAIL_START_REGEX = /^[A-Za-z0-9+_.-]+$/;
const EMAIL_AFTER_AT_REGEX = /^[A-Za-z0-9.-]+$/;
const EMAIL_DOMAIN_REGEX = /^[A-Za-z]{2,}$/;
const EMAIL_MIN_LENGTH = 6;
const EMAIL_MAX_LENGTH = 80;
const NAME_REGEX = /^[^\s\d-,.!$%^&*()+|~=_{}[\]:";'<>?\/].+[^\s\d!$%^&*()+|~=_{}\[\]:";'<>?\/]$/i;

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

  if (!isEmailSubPartValid(startingPart, EMAIL_START_REGEX, /[+_.-]/)) {
    return false;
  }

  if (!isEmailSubPartValid(afterAtSignPart, EMAIL_AFTER_AT_REGEX, /[.-]/)) {
    return false;
  }

  if (!/[.]/.test(afterAtSignPart)) {
    return false;
  }

  const domainSubPart = afterAtSignPart.substr(afterAtSignPart.lastIndexOf('.') + 1);

  if (!EMAIL_DOMAIN_REGEX.test(domainSubPart)) {
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

export const validateName = (value: string): boolean => {
  if (!value) {
    return false;
  }

  return NAME_REGEX.test(value);
}

export const validateDate = (value: Date | string): boolean => {
  const date = new Date(value);

  if (!Date.parse(date.toString())) {
    return false
  }

  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  if (month + 1 > 12) {
    return false;
  }

  const today = new Date();
  const todayDay = today.getDate();
  const todayMonth = today.getMonth();
  const todayYear = today.getFullYear();

  if (year > todayYear || (month > todayMonth && year === todayYear) || (day > todayDay && month === todayMonth && year === todayYear)) {
    return false;
  }

  return true;
};
