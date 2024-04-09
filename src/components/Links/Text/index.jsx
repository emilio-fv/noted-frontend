import React from 'react';
import Link from '@mui/material/Link';

const TextLink = ({ sx, text }) => {
  return (
    <Link
      style={{ cursor: 'crosshair' }}
      sx={{
        ...sx,
      }}
    >
      {text}
    </Link>
  )
};

export default TextLink;