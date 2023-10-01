import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextInput from '../../Inputs/Text';
import EmailInput from '../../Inputs/Email';
import PasswordInput from '../../Inputs/Password';
import ActionButton from '../../Buttons/Action';
import { useOutletContext } from 'react-router-dom';
import { Link } from '@mui/material';

const labels = {
  firstName: 'First Name',
  lastName: 'Last Name',
  username: 'Username',
  email: 'Email',
  password: 'Password',
  confirmPassword: 'Confirm Password '
};

const initialState = {
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const RegisterForm = ({ setOpenModal }) => {
  const handleLoginHereClick = () => {
    setOpenModal('login');
  }

  // Form helpers
  const [formData, setFormData] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});

  const validateFormData = (data) => {
    let errors = {};

    for (const [name, value] of Object.entries(data)) {
      // Required fields validation
      if (value.length === 0) {
        errors = {
          ...errors,
          [name]: labels[name] + ' is required.'
        };
      } 

      // Email validation
      if (name === 'email') {
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value)) {
          errors = {
            ...errors,
            [name]: 'Invalid email format'
          };
        } 
      }

      // Password length validation
      if (name === 'password') {
        if (value.length < 8) {
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
            [name]: 'Passwords must match'
          };
        }
      }
    }

    setFormErrors(errors);
  }

  const handleFormChanges = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  
  const handleFormSubmit = (event) => {
    event.preventDefault();
    validateFormData(formData);
    // TODO: Backend API call
  }

  return (
    <>
        <Typography 
          variant='h6' 
          sx={{ 
            color: 'text.light',
            marginBottom: 1
          }}
        >
          Create An Account
        </Typography>
      <Box
        component={'form'}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onSubmit={(event) => handleFormSubmit(event)}
      >
        <TextInput 
          name={'firstName'}
          label={labels.firstName}
          value={formData.firstName}
          handleChange={handleFormChanges}
          error={formErrors?.firstName}
          sx={{
            marginBottom: formErrors?.firstName ? 1 : 3
          }}
        />
        <TextInput 
          name={'lastName'}
          label={labels.lastName}
          value={formData.lastName}
          handleChange={handleFormChanges}
          error={formErrors?.lastName}
          sx={{
            marginBottom: formErrors?.lastName ? 1 : 3
          }}
        />
        <TextInput 
          name={'username'}
          label={labels.username}
          value={formData.username}
          handleChange={handleFormChanges}
          error={formErrors?.username}
          sx={{
            marginBottom: formErrors?.username ? 1 : 3
          }}
        />
        <EmailInput 
          name={'email'}
          label={labels.email}
          value={formData.email}
          handleChange={handleFormChanges}
          error={formErrors?.email}
          sx={{
            marginBottom: formErrors?.email ? 1 : 3
          }}
        />
        <PasswordInput 
          name={'password'}
          label={labels.password}
          value={formData.password}
          handleChange={handleFormChanges}
          error={formErrors?.password}
          sx={{
            marginBottom: formErrors?.password ? 1 : 3
          }}
        />
        <PasswordInput 
          name={'confirmPassword'}
          label={labels.confirmPassword}
          value={formData.confirmPassword}
          handleChange={handleFormChanges}
          error={formErrors?.confirmPassword}
          sx={{
            marginBottom: formErrors?.confirmPassword ? 1 : 3
          }}
        />
        <ActionButton
          sx={{
            marginBottom: 2
          }}
          text={'Create Account'}
        />
      </Box>
      <Typography
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 1,
        }}
      >
        Already have an account? 
        <Link
          component={'a'}
          onClick={() => handleLoginHereClick()}
        >
          Login here.
        </Link>
      </Typography>
    </>
  )
};

export default RegisterForm;