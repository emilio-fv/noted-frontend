import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';

import CircularProgress from '@mui/material/CircularProgress';

const LoadingScreen = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('loading...')
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box 
        sx={{
            height: '100%',
            bgcolor: 'inherit',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}
    >
        <CircularProgress />
    </Box>
  )
}

export default LoadingScreen;