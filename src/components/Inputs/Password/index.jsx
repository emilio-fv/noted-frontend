import { Visibility, VisibilityOff } from '@mui/icons-material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import React, { useState } from 'react';

const PasswordInput = ({ sx, name, label, value, handleChange, error }) => {
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
      }}
    >
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <OutlinedInput 
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
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge='end'
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
      {error 
        ? <FormHelperText sx={{ color: 'error.main' }}>{error}</FormHelperText> 
        : null
      }
    </FormControl>
  )
};

export default PasswordInput;