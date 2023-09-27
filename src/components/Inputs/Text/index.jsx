import React from 'react';
import TextField from '@mui/material/TextField';

const TextInput = ({ sx, name, label, value, handleChange, error }) => {
  return (
    <TextField 
      sx={{
        ...sx,
        // TODO: styling
      }}
      size='small'
      fullWidth
      name={name}
      label={label}
      variant='outlined'
      value={value}
      onChange={(event) => handleChange(event)}
      error={error ? true : false}
      helperText={error ? error : ''}
    />
  )
};

export default TextInput;