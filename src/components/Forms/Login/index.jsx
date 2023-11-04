import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ActionButton from '../../Buttons/Action';
import EmailInput from '../../Inputs/Email';
import PasswordInput from '../../Inputs/Password';
import { Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../../services/auth/authService';

const labels = {
  email: 'Email',
  password: 'Password'
};

const initialState = {
  email: '',
  password: ''
};

const LoginForm = ({ setOpenModal }) => {
  // Navigation helper
  const navigate = useNavigate();

  // Handle API call
  const [login, { status, error }] = useLoginMutation();

  // Modal helper
  const handleRegisterHereClick = () => {
    setOpenModal('register');
  };

  // Form helpers
  const [formData, setFormData] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});

  const validateFormData = (data) => {
    let errors = {};

    for (const [name, value] of Object.entries(data)) {
      // Handle required fields
      if (value.length === 0) {
        errors = {
          ...errors,
          [name]: labels[name] + ' is required.'
        };
      }

      // Handle valid email format
      if (name === 'email') {
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value)) {
          errors = {
            ...errors,
            email: 'Email invalid.'
          };
        }
      }

      if (name === 'password') {
        if (value.length < 8) {
          errors = {
            ...errors,
            [name]: 'Password must be at least 8 characters.'
          }
        }
      }
    }

    setFormErrors(errors);
  }

  // TODO: Handle failed login
  if (status === 'failed') {
    console.log(error);
    setFormErrors(error);
  }

  // TODO: Handle successful login
  if (status === 'success') {
    navigate('/home');
  }

  // Handle form changes
  const handleFormChanges = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  // Handle form submit
  const handleFormSubmit = (event) => {
    event.preventDefault();
    validateFormData(formData);

    if (Object.keys(formData).length === 0) {
      login(formData);
    }
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
        Login
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
        <ActionButton
          sx={{
            marginBottom: 2
          }}
          text={'Login'}
        />
      </Box>
      <Typography
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 1,
        }}
      >
        Don't have an account?
        <Link
          component={'a'}
          onClick={() => handleRegisterHereClick()}
        >
          Register here.
        </Link>
      </Typography>
    </>
  )
};

export default LoginForm;