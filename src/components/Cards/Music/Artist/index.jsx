import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const ArtistCard = ({ maxWidth }) => {
  return (
    <Paper
      elevation={4}
      sx={{
        backgroundColor: 'background.card',
        paddingY: 2,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        maxWidth: maxWidth,
        textAlign: 'center'
      }}
    >
      <Box
        component={'img'}
        sx={{
          width: '70%',
          height: 'auto',
          borderRadius: '50%'
        }}
        src={require('../../../../assets/images/album-demo.png')}
      />
      <Typography
        sx={{
          marginTop: 2,
        }}
      >
        Artist Name
      </Typography>
    </Paper>
  )
};

export default ArtistCard;