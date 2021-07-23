import { UsernamePasswordInput } from '../resolvers';

export const validateRegister = (options: UsernamePasswordInput) => {
  if (options.firstName.length <= 2) {
    return [
      {
        field: 'firstName',
        message: 'Length must be greater than 2',
      },
    ];
  }

  if (options.firstName.length < 0) {
    return [
      {
        field: 'firstName',
        message: 'The name must not be empty.',
      },
    ];
  }

  if (options.lastName.length <= 2) {
    return [
      {
        field: 'lastName',
        message: 'Length must be greater than 2',
      },
    ];
  }

  if (options.lastName.length < 0) {
    return [
      {
        field: 'lastName',
        message: 'The last name must not be empty.',
      },
    ];
  }

  if (!options.email.includes('@')) {
    return [
      {
        field: 'email',
        message: 'Invalid email',
      },
    ];
  }

  if (options.username.length <= 2) {
    return [
      {
        field: 'username',
        message: 'Length must be greater than 2',
      },
    ];
  }

  if (options.username.includes('@')) {
    return [
      {
        field: 'username',
        message: 'You cannot include an @ on your username',
      },
    ];
  }

  if (options.password.length <= 2) {
    return [
      {
        field: 'password',
        message: 'Length must be greater than 2',
      },
    ];
  }

  return null;
};
