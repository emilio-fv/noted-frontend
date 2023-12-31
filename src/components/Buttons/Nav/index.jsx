import React from 'react';
import Button from '@mui/material/Button';

const NavButton = ({ handleClick, sx, text }) => {
  return (
    <Button
      onClick={handleClick}
      variant='text'
      sx={{
        color: 'text.light',
        '&:hover': {
          textDecoration: 'underline',
          backgroundColor: 'inherit',
        },
        '&:active': {
          backgroundColor: 'inherit'
        },
        // TODO: handle on click styling
        ...sx,
      }}
    >
      {text}
    </Button>
  )
};

export default NavButton;