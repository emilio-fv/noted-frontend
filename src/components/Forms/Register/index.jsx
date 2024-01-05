import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import TextInput from '../../Inputs/Text';
import PasswordInput from '../../Inputs/Password';
import ActionButton from '../../Buttons/Action';
import { useRegisterMutation } from '../../../services/auth/authService';
import { validateRegisterForm } from '../../../utils/formValidators';
import { registerFormLabels } from '../../../assets/data/constants';

const RegisterForm = ({ setOpenModal }) => {
  // Handle API request
  const [register, { status, error  }] = useRegisterMutation();

  // Modal helper
  const handleLoginHereClick = () => {
    setOpenModal('login');
  }

  // Form helpers
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [formErrors, setFormErrors] = useState({});

  // Handle register status
  useEffect(() => {
    if (status === 'rejected') {
      setFormErrors({
        ...error
      });
    }

    if (status === 'succeeded') {
      setOpenModal(false);
      return <Navigate to='/home' replace={true} />
    }
  }, [status]);

  // Handle form changes
  const handleFormChanges = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submit
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const errors = validateRegisterForm(formData);

    if (Object.keys(errors).length === 0) {
      register(formData);
    } else {
      setFormErrors(errors);
    }
  };

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
          label={registerFormLabels.firstName}
          value={formData.firstName}
          handleChange={handleFormChanges}
          error={formErrors?.firstName}
          sx={{
            marginBottom: formErrors?.firstName ? 1 : 3
          }}
        />
        <TextInput 
          name={'lastName'}
          label={registerFormLabels.lastName}
          value={formData.lastName}
          handleChange={handleFormChanges}
          error={formErrors?.lastName}
          sx={{
            marginBottom: formErrors?.lastName ? 1 : 3
          }}
        />
        <TextInput 
          name={'username'}
          label={registerFormLabels.username}
          value={formData.username}
          handleChange={handleFormChanges}
          error={formErrors?.username}
          sx={{
            marginBottom: formErrors?.username ? 1 : 3
          }}
        />
        <TextInput 
          name={'email'}
          label={registerFormLabels.email}
          value={formData.email}
          handleChange={handleFormChanges}
          error={formErrors?.email}
          sx={{
            marginBottom: formErrors?.email ? 1 : 3
          }}
        />
        <PasswordInput 
          name={'password'}
          label={registerFormLabels.password}
          value={formData.password}
          handleChange={handleFormChanges}
          error={formErrors?.password}
          sx={{
            marginBottom: formErrors?.password ? 1 : 3
          }}
        />
        <PasswordInput 
          name={'confirmPassword'}
          label={registerFormLabels.confirmPassword}
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