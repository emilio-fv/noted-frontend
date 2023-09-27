import { Typography } from '@mui/material';
import React from 'react';

const HomePage = () => {
  return (
    <>
      <Typography 
        variant='h6'
        sx={{ 
          color: 'text.light' 
        }}
      >
        Welcome message, username!..........
      </Typography>
      {/* TODO: new from friends */}
      {/* TODO: popular reviews */}
      {/* TODO: recent reviews */}
    </>
  )
}

export default HomePage;