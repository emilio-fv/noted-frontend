// Imports
import { registerFormLabels, loginFormLabels } from "../assets/data/constants";

export const validateRegisterForm = (data) => {
    let errors = {};

    for (const [name, value] of Object.entries(data)) {
      // Required fields validation
      if (value.length === 0) {
        errors = {
          ...errors,
          [name]: registerFormLabels[name] + ' required.'
        };
      } 

      // Email validation
      if (name === 'email' && value.length > 0) {
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value)) {
          errors = {
            ...errors,
            [name]: 'Invalid email.'
          };
        } 
      }

      // Password length validation
      if (name === 'password') {
        if (value.length < 8 && value.length > 0) {
          errors = {
            ...errors,
            [name]: 'Password must be at least 8 characters.'
          };
        }
      }

      // Matching password & confirm password validation
      if (name === 'confirmPassword') {
        if (value !== data.password) {
          errors = {
            ...errors,
            [name]: 'Passwords must match.'
          };
        }
      }
    }

    return errors;
};

export const validateLoginForm = (data) => {
  let errors = {};

  for (const [name, value] of Object.entries(data)) {
    // Handle required fields
    if (value.length === 0) {
      errors = {
        ...errors,
        [name]: loginFormLabels[name] + ' is required.'
      };
    }

    // Handle valid email format
    if (name === 'email' && value.length > 0) {
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value)) {
        errors = {
          ...errors,
          email: 'Invalid email.'
        };
      }
    }
  }

  return errors;
};