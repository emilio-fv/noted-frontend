import React from 'react';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';

const NavLink = ({ path, sx, text }) => {
  return (
    <Link
      to={path}
      component={RouterLink}
      underline='none'
      noWrap
      sx={{
        ...sx,
      }}
    >
      {text}
    </Link>
  )
};

export default NavLink;