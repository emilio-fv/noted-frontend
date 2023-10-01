import React, { useState } from 'react';
import { Box, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

const UserReviewCard = () => {
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
        src={require('../../../../assets/album-demo.png')}
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
        Renaissance
      </Typography>
      <Typography
        sx={{
          fontSize: { md: '.75rem'},
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        Beyoncé
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
          username
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Typography>
            4
          </Typography>
          <StarIcon 
            sx={{ 
              color: 'text.light', 
              marginBottom: .4,
              fontSize: '.9rem'
            }}
          />
        </Box>
      </Box>
    </Box>
  )
};

export default UserReviewCard;