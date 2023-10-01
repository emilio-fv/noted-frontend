import React from 'react';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';

const NavLink = ({ handleClick, path, sx, text }) => {
  return (
    <Link
      onClick={handleClick}
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