import { validateEmail, validatePhoneNumber } from './validators';

describe('validators', () => {
  describe('validatePhoneNumber', () => {
    it('should validate mobile phone number with format +XX XXX XXX XXX', () => {
      expect(validatePhoneNumber('+48 690 690 690')).toBeTruthy();
    });

    it('should validate mobile phone number with format +XX XXXXXXXXX', () => {
      expect(validatePhoneNumber('+48 690690690')).toBeTruthy();
    });

    it('should validate mobile phone number with format XXX XXX XXX', () => {
      expect(validatePhoneNumber('690 690 690')).toBeTruthy();
    });

    it('should validate mobile phone number with format XXXXXXXXX', () => {
      expect(validatePhoneNumber('690690690')).toBeTruthy();
    });

    it('should validate mobile phone number with format +XXX XXX XXX XXX', () => {
      expect(validatePhoneNumber('+142 690 690 690')).toBeTruthy();
    });

    it('should validate mobile phone number with format +XXX XXXXXXXXX', () => {
      expect(validatePhoneNumber('+142 690690690')).toBeTruthy();
    });

    it('should validate mobile phone number with format +XX XXX-XXX-XXX', () => {
      expect(validatePhoneNumber('+48 690-690-690')).toBeTruthy();
    });

    it('should validate mobile phone number with format +XXX XXX-XXX-XXX', () => {
      expect(validatePhoneNumber('+142 690-690-690')).toBeTruthy();
    });

    it('should validate phone number with format +XX XX XXX XX XX', () => {
      expect(validatePhoneNumber('+48 24 800 00 00')).toBeTruthy();
    });

    it('should validate phone number with format +XX XX-XXX-XX-XX', () => {
      expect(validatePhoneNumber('+48 24-800-00-00')).toBeTruthy();
    });

    it('should validate phone number with format XX-XXX-XX-XX', () => {
      expect(validatePhoneNumber('24-800-00-00')).toBeTruthy();
    });

    it('should validate phone number with format XX XXX XX XX', () => {
      expect(validatePhoneNumber('24 800 00 00')).toBeTruthy();
    });

    it('should return false on invalid format', () => {
      expect(validatePhoneNumber('13223124 800 00 00')).toBeFalsy();
      expect(validatePhoneNumber('asd 800 00 00')).toBeFalsy();
      expect(validatePhoneNumber('+- 48 800 00 00')).toBeFalsy();
      expect(validatePhoneNumber('13223124 + 123')).toBeFalsy();
      expect(validatePhoneNumber('13223124 +48')).toBeFalsy();
    });
  });

  describe('validateEmail', () => {
    it('should validate email address with one @ sign', () => {
      expect(validateEmail('john!')).toBeFalsy();
      expect(validateEmail('john@doe@gmail.com')).toBeFalsy();
      expect(validateEmail('john@gmail.com')).toBeTruthy();
    });

    it('should validate email address with top-level at least 2 chars', () => {
      expect(validateEmail('john@gmail.c')).toBeFalsy();
      expect(validateEmail('john@localhost')).toBeFalsy();
      expect(validateEmail('john@gmail.com')).toBeTruthy();
    });

    it('should not validate email address with invalid characters (only [A-Za-z0-9+_.-])', () => {
      expect(validateEmail('johń42@gmail.com')).toBeFalsy();
      expect(validateEmail('jo%hn@gmail.com')).toBeFalsy();
      expect(validateEmail('Jo-hn.doe@gmail.com')).toBeTruthy();
      expect(validateEmail('Jo-hn.doe+test@gmail.com')).toBeTruthy();
      expect(validateEmail('Jo-hn.doe++test@gmail.com')).toBeTruthy();
    });

    it('should not validate email address with invalid characters on the begging and end ([+_.-])', () => {
      expect(validateEmail('+john@gmail.com')).toBeFalsy();
      expect(validateEmail('_john@gmail.com')).toBeFalsy();
      expect(validateEmail('.john@gmail.com')).toBeFalsy();
      expect(validateEmail('-john@gmail.com')).toBeFalsy();

      expect(validateEmail('john+@gmail.com')).toBeFalsy();
      expect(validateEmail('john_@gmail.com')).toBeFalsy();
      expect(validateEmail('john.@gmail.com')).toBeFalsy();
      expect(validateEmail('john-@gmail.com')).toBeFalsy();
    });
  });
});
