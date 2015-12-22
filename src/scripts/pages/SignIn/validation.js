import validator from 'validator';

export function validate(data) {
  const errors = {};

  if (!data.code) {
    errors.code = 'Please, enter your invite code';
  } else if (!validator.isUUID(data.code)) {
    errors.code = 'Invalid invite code';
  }

  return errors;
}
