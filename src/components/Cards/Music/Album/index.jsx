import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const AlbumCard = ({ maxWidth, profileCard=false }) => {
  return (
    <Paper
      elevation={4}
      sx={{
        backgroundColor: 'background.card',
        padding: 2,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        maxWidth: maxWidth,
        textAlign: 'center'
      }}
    >
      <Box 
        component={'img'}
        sx={{
          width: '100%',
          height: 'auto',
          borderRadius: '5%'
        }}
        src={require('../../../../assets/album-demo.png')}
      />
      <Typography 
        sx={{ 
          marginTop: 1,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          fontStyle: 'italic',
          marginTop: 1,
        }}
      >
        Album Name
      </Typography>
      {profileCard
        ? null
        : <Typography
            sx={{
              fontSize: { md: '.75rem'},
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            Artist Name
          </Typography>
      }
    </Paper>
  )
};

export default AlbumCard;