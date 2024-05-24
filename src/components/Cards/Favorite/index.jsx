import { Box, Paper, Typography } from '@mui/material';
import React from 'react';

const FavoriteCard = ({ favorite }) => {
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
        src={favorite.albumImages[0].url}
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
        {favorite.album}
      </Typography>
      <Typography
        sx={{
          fontSize: '.75rem',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {favorite.artist}
      </Typography>
      <Typography
        sx={{
          fontSize: '.75rem',
        }}
      >
        {favorite.rating} &#9733;
      </Typography>
    </Paper>
  )
};

export default FavoriteCard;