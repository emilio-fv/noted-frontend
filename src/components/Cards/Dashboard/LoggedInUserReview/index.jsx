import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const LoggedInUserReviewCard = ({ review }) => {
  return (
    <Box
      sx={{
        paddingX: { xs: 12, sm: 3, md: 2 },
        paddingY: 2,
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        overflow: 'hidden',
        whiteSpace: 'nowrap'
      }}
    >
      <Box 
        component={'img'}
        sx={{
          width: '100%',
          height: 'auto'
        }}
        src={require('../../../../assets/images/album-demo.png')}
      />
      <Typography
        sx={{
          fontSize: { md: '1rem'},
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          fontStyle: 'italic',
          marginTop: 1,
        }}
      >
        {review.album}
      </Typography>
      <Typography
        sx={{
          fontSize: { md: '.75rem'},
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {review.artist}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around'
        }}
      >
        <Typography
          sx={{
            fontSize: { md: '.75rem'},
          }}
        >
          {review.createdAt}
        </Typography>
        <IconButton onClick={null} sx={{ fontSize: '.75rem', color: 'text.light' }}>
          <EditIcon fontSize='inherit'/>
        </IconButton>
        <IconButton onClick={null} sx={{ fontSize: '.75rem', color: 'text.light' }}>
          <DeleteIcon fontSize='inherit'/>
        </IconButton>
      </Box>
    </Box>
  )
};

export default LoggedInUserReviewCard;