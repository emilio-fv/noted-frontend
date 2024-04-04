import React from 'react';
import TextField from '@mui/material/TextField';

const TextInput = ({ sx=null, name, label, value, multiline=false, rows=1, placeholder='', handleChange, error=null }) => {
  return (
    <TextField
      sx={{
        ...sx,
      }}
      margin='none'
      size='small'
      multiline={multiline}
      inputProps={{ style: { color: '#dbdbdb' }}}
      fullWidth
      rows={rows}
      name={name}
      label={label}
      variant='outlined'
      value={value}
      placeholder={placeholder}
      onChange={(event) => handleChange(event)}
      error={error ? true : false}
      helperText={error ? error : ''}
    />
  )
};

export default TextInput;