import { Box, Paper, Typography } from '@mui/material';
import React from 'react';

const FavoriteCard = () => {
  return (
    <Paper
      sx={{
        backgroundColor: 'background.card',
        display: 'flex',
        justifyContent: 'center',
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingY: 1,
        overflow: 'hidden',
        whiteSpace: 'nowrap'
      }}
    >
      {/* Album cover */}
      <Box 
        component='img'
        src={require('../../../assets/album-demo.png')}
        sx={{
          maxWidth: { xs: '50px', md: '100px'},
        }}
      />
      <Typography
        sx={{
          fontStyle: 'italic',
          fontSize: '.85rem',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          marginTop: 1,
        }}
      >
        Album Name
      </Typography>
      <Typography
        sx={{
          fontSize: '.75rem',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        Artist Name
      </Typography>
      <Typography
        sx={{
          fontSize: '.75rem',
        }}
      >
        4 &#9733;
      </Typography>
    </Paper>
  )
};

export default FavoriteCard;