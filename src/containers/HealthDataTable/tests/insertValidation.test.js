import {
  validateDate,
  validateDuration,
  validateBodyFat,
  validateWeight } from '../insertValidation';


describe('Insert entry form validation', () => {
  describe('Validate date', () => {
    it('accepts a valid date', () => {
      const actual = validateDate('2017-09-18');
      const expected = { isValid: true, notification: { type: 'success', msg: '', title: '' } };
      expect(actual).toEqual(expected);
    });
    it('does not accept an invalid date and returns an error', () => {
      const actual = validateDate('not a date');
      const expected =
        { isValid: false, notification: { type: 'danger', msg: 'You must enter a valid date', title: 'Error' } };
      expect(actual).toEqual(expected);
    });
  });

  describe('Validate duration', () => {
    it('accepts a duration that is a number', () => {
      const actual = validateDuration('24');
      const expected = { isValid: true, notification: { type: 'success', msg: '', title: '' } };
      expect(actual).toEqual(expected);
    });

    it('cannot accept a value that is not a number', () => {
      const actual = validateDuration('not a number');
      const expected =
        { isValid: false,
          notification: {
            type: 'danger',
            msg: 'Duration must be a number',
            title: 'Error'
          } };
      expect(actual).toEqual(expected);
    });

    it('cannot be more than 24 hours and returns an error', () => {
      const actual = validateDuration('25');
      const expected =
        { isValid: false,
          notification: {
            type: 'danger',
            msg: 'Duration cannot be more than 24 hours',
            title: 'Error'
          } };
      expect(actual).toEqual(expected);
    });
    it('cannot be less than 0 hours and returns an error', () => {
      const actual = validateDuration('-1');
      const expected =
        { isValid: false,
          notification: {
            type: 'danger',
            msg: 'Duration cannot be less than 0 hours',
            title: 'Error'
          } };
      expect(actual).toEqual(expected);
    });
  });

  describe('Validate weight', () => {
    it('accepts a weight that is a number', () => {
      const actual = validateWeight('72');
      const expected = { isValid: true, notification: { type: 'success', msg: '', title: '' } };
      expect(actual).toEqual(expected);
    });
    it('does not accept a weight that is not a number and returns error', () => {
      const actual = validateWeight('not a number');
      const expected =
        { isValid: false,
          notification: {
            type: 'danger',
            msg: 'Weight must be a number',
            title: 'Error'
          } };
      expect(actual).toEqual(expected);
    });
  });

  describe('Validate body fat', () => {
    it('accepts a body fat value that is a number', () => {
      const actual = validateBodyFat('16');
      const expected = { isValid: true, notification: { type: 'success', msg: '', title: '' } };
      expect(actual).toEqual(expected);
    });

    it('cannot accept a body fat value that is not a number', () => {
      const actual = validateBodyFat('not a number');
      const expected =
        { isValid: false,
          notification: {
            type: 'danger',
            msg: 'Body fat must be a number',
            title: 'Error'
          } };
      expect(actual).toEqual(expected);
    });

    it('does not accept a body value fat less than 0% and returns error', () => {
      const actual = validateBodyFat('-1');
      const expected =
        { isValid: false,
          notification: {
            type: 'danger',
            msg: 'Body fat cannot be less than 0%',
            title: 'Error'
          } };
      expect(actual).toEqual(expected);
    });

    it('does not accept a body fat value more than 100% and returns error', () => {
      const actual = validateBodyFat('101');
      const expected =
        { isValid: false,
          notification: {
            type: 'danger',
            msg: 'Body fat cannot be more than 100%',
            title: 'Error'
          } };
      expect(actual).toEqual(expected);
    });
  });
});
