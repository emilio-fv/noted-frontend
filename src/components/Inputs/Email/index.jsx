import TextField from '@mui/material/TextField';
import React from 'react';

const EmailInput = ({ sx, name, label, value, handleChange, error }) => {
  return (
    <TextField 
      sx={{
        ...sx,
        // TODO; styling
      }}
      fullWidth
      size='small'
      name={name}
      label={label}
      variant='outlined'
      value={value}
      onChange={(event) => handleChange(event)}
      error={error ? true : false}
      helperText={error ? error : ''}
      type='email'
    />
  )
};

export default EmailInput;