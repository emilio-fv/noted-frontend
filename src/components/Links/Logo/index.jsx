import React from 'react';
import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const LogoLink = ({ variant, sx }) => {
  return (
    <Link
      component={RouterLink}
      to='/'
      underline='none'
      variant={variant}
      noWrap
      sx={{
        color: 'text.light',
        ...sx,
      }}
    >
      Noted
    </Link>
  )
};

export default LogoLink;