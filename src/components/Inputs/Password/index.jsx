import { Visibility, VisibilityOff } from '@mui/icons-material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import React, { useState } from 'react';

const PasswordInput = ({ sx=null, name, label, value, handleChange, error }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <FormControl
      variant='outlined'
      fullWidth
      size='small'
      sx={{
        ...sx,
        // TODO styling
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#66A9A9',
          },
          '&:hover fieldset': {
            borderColor: '#66A9A9',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#83d6d6',
          },
          '&.Mui-focused': {
            borderColor: '#83d6d6',
          },
        }
      }}
    >
      <InputLabel error={error ? true : false} htmlFor={name}>{label}</InputLabel>
      <OutlinedInput 
        // notched
        label={label}
        sx={{
          '& fieldset': {
            borderColor: '#66A9A9',
            color: error ? 'red' : 'text.light'
          },
          '&:hover fieldset': {
            borderColor: '#83d6d6',
          },
          '& input': {
            color: 'text.light'
          }
        }}
        id={name}
        type={showPassword ? 'text' : 'password'}
        name={name}
        value={value}
        error={error ? true : false}
        onChange={(event) => handleChange(event)}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton
              aria-label='toggle password visibility'
              data-testid='toggle-password-visibility'
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge='end'
            >
              {showPassword ? <VisibilityOff htmlColor='#dbdbdb'/> : <Visibility htmlColor='#dbdbdb'/>}
            </IconButton>
          </InputAdornment>
        }
      />
      {error 
        ? <FormHelperText sx={{ color: 'error.main', marginTop: 1.5 }}>{error}</FormHelperText> 
        : null
      }
    </FormControl>
  )
};

export default PasswordInput;