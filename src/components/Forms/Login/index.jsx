import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ActionButton from '../../Buttons/Action';
import PasswordInput from '../../Inputs/Password';
import { Link } from '@mui/material';
import { Navigate } from 'react-router-dom';
import { useLoginMutation } from '../../../services/auth/authService';
import { loginFormLabels } from '../../../assets/data/constants';
import { validateLoginForm } from '../../../utils/formValidators';
import TextInput from '../../Inputs/Text';

const LoginForm = ({ setOpenModal }) => {
  // Handle API request
  const [login, { status, error }] = useLoginMutation();

  // Modal helper
  const handleRegisterHereClick = () => {
    setOpenModal('register');
  };

  // Form helpers
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [formErrors, setFormErrors] = useState({});

  // Handle login status
  useEffect(() => {
    console.log(status);
    if (status === 'rejected') {
      setFormErrors({
        backend: error
      });
    }

    if (status === 'fulfilled') {
      setOpenModal(false);
      return <Navigate to='/home' />
    }
  }, [status]);

  // Handle form changes
  const handleFormChanges = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  // Handle form submit
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const errors = validateLoginForm(formData);
    
    if (Object.keys(errors).length === 0) {
      login(formData);
    } else {
      setFormErrors(errors);
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
        <TextInput 
          name={'email'}
          label={loginFormLabels.email}
          value={formData.email}
          handleChange={handleFormChanges}
          error={formErrors?.email}
          sx={{
            marginBottom: formErrors?.email ? 1 : 3
          }}
        />
        <PasswordInput
          name={'password'}
          label={loginFormLabels.password}
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
      {/*  */}
        {formErrors?.backend 
          ? <Typography>
            {formErrors.backend}
          </Typography>
          : null
        }
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