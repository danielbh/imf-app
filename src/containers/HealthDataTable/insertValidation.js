
export function validateDate(value, row) {
  let response = {
    isValid: false,
    notification: { type: 'danger', msg: 'You must enter a valid date', title: 'Error' }
  };

  if (Date.parse(value)) {
    if (value > new Date()) {
      return {
        isValid: false,
        notification: { type: 'danger', msg: 'The date cannot be after today', title: 'Error' }
      };
    }
    response = { isValid: true, notification: { type: 'success', msg: '', title: '' } };
  }
  return response;
}

export function validateDuration(value, row) {
  const response = { isValid: true, notification: { type: 'success', msg: '', title: '' } };
  const error = errorIfInvalidNumberOutsideRange({ value, fieldName: 'Duration', low: 0, high: 24, units: ' hours' });
  return error || response;
}

export function validateWeight(value, row) {
  const response = { isValid: true, notification: { type: 'success', msg: '', title: '' } };
  const error = errorIfInvalidNumberOutsideRange({ value, fieldName: 'Weight', units: ' kg', high: 1000 });
  return error || response;
}

export function validateBodyFat(value, row) {
  const response = { isValid: true, notification: { type: 'success', msg: '', title: '' } };
  const error = errorIfInvalidNumberOutsideRange({ value, fieldName: 'Body fat', units: '%' });
  return error || response;
}

/**
 * Function for validating number values that must be in a specific range.
 *
 * @param value - The input value.
 * @param fieldName - The field name used for validation error messages.
 * @param low - The low value of the valid input range.
 * @param high - The high value of the valid input range.
 * @param units - Number units such as a percentage or currency. Add a space if you want one in between
 *                the range error number and the unit symbol.
 * @returns {*}
 */
function errorIfInvalidNumberOutsideRange({ value, fieldName, low = 0, high = 100, units = '' } = {}) {
  const valueAsInt = parseInt(value, 0);
  let response;
  if (isNaN(valueAsInt)) {
    response = {
      isValid: false,
      notification: { type: 'danger', msg: `${fieldName} must be a number`, title: 'Error' }
    };
  } else if (value < low) {
    response = {
      isValid: false,
      notification: {
        type: 'danger',
        msg: `${fieldName} cannot be less than ${low}${units}`,
        title: 'Error'
      } };
  } else if (value > high) {
    response = {
      isValid: false,
      notification: {
        type: 'danger',
        msg: `${fieldName} cannot be more than ${high}${units}`,
        title: 'Error'
      } };
  }
  return response;
}
