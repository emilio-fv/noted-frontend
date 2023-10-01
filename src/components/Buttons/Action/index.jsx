import React from 'react';
import Button from '@mui/material/Button';

const ActionButton = ({ handleClick, sx, text }) => {
  return (
    <Button
      type='submit'
      onClick={handleClick}
      variant='contained'
      size='small'
      sx={{
        paddingX: 3,
        color: 'text.dark',
        fontWeight: 600,
        '&:hover': {
          backgroundColor: 'primary.main',
          border: '.5px solid white'
        },
        ...sx
      }}
    >
      {text}
    </Button>
  )
};

export default ActionButton;