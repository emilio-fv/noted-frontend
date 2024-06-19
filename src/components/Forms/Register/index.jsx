import React, { useEffect, useState } from 'react';
import { Navigate, useOutletContext } from 'react-router-dom';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import TextInput from '../../Inputs/Text';
import PasswordInput from '../../Inputs/Password';
import ActionButton from '../../Buttons/Action';
import { useRegisterMutation } from '../../../services/auth/authService';
import { validateRegisterForm } from '../../../utils/formValidators';
import { registerFormLabels } from '../../../assets/data/constants';


const RegisterForm = ({ handleOpenModal, handleCloseModal}) => {
  // Handle API request
  const [register, { status, error }] = useRegisterMutation();

  // Modal helpers
  const handleLoginHereClick = () => {
    handleOpenModal('login');
  };

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

    if (status === 'fulfilled') {
      handleCloseModal();
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

  if (status === 'fulfilled') {
      return <Navigate to='/home' replace={true} />
  } else if (status === 'pending') {
    return <CircularProgress />
  }else {
    return (
      <>
          <Typography 
            variant='h6' 
            sx={{ 
              color: 'text.light',
              marginBottom: 1
            }}
          >
            Create Account
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
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: 2
            }}
          >
            <TextInput 
              name={'firstName'}
              label={registerFormLabels.firstName}
              value={formData.firstName}
              handleChange={handleFormChanges}
              error={formErrors?.firstName}
              sx={{
                marginBottom: formErrors?.firstName ? 1 : 2
              }}
            />
            <TextInput 
              name={'lastName'}
              label={registerFormLabels.lastName}
              value={formData.lastName}
              handleChange={handleFormChanges}
              error={formErrors?.lastName}
              sx={{
                marginBottom: formErrors?.lastName ? 1 : 2
              }}
            />
          </Box>
          <TextInput 
            name={'username'}
            label={registerFormLabels.username}
            value={formData.username}
            handleChange={handleFormChanges}
            error={formErrors?.username}
            sx={{
              marginBottom: formErrors?.username ? 1 : 2
            }}
          />
          <TextInput 
            name={'email'}
            label={registerFormLabels.email}
            value={formData.email}
            handleChange={handleFormChanges}
            error={formErrors?.email}
            sx={{
              marginBottom: formErrors?.email ? 1 : 2
            }}
          />
          <PasswordInput 
            name={'password'}
            label={registerFormLabels.password}
            value={formData.password}
            handleChange={handleFormChanges}
            error={formErrors?.password}
            sx={{
              marginBottom: formErrors?.password ? 1.5 : 2
            }}
          />
          <PasswordInput 
            name={'confirmPassword'}
            label={registerFormLabels.confirmPassword}
            value={formData.confirmPassword}
            handleChange={handleFormChanges}
            error={formErrors?.confirmPassword}
            sx={{
              marginBottom: formErrors?.confirmPassword ? 1.5 : 2
            }}
          />
          <ActionButton
            fullWidth={true}
            sx={{
              marginBottom: 2
            }}
            text={'Create Account'}
          />
        </Box>
        <Typography
          variant='caption'
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: { sm: .5, md: 1},
          }}
        >
          Already have an account? 
          <Link
            component={'a'}
            variant='inherit'
            style={{ cursor: 'pointer' }}
            onClick={() => handleLoginHereClick()}
          >
            Login here.
          </Link>
        </Typography>
      </>
    )
  }
};

export default RegisterForm;