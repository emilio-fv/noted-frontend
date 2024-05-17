import { Box, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';

const AlbumProfileReviewCard = ({ review }) => {
  const [likes, setLikes] = useState(0);

  const incrementLikes = () => {
    setLikes((likes) => likes+1);
  }

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <Box
        sx={{
          flex: '10%',
          display: 'flex',
          justifyContent: 'center',
          paddingTop: 1,
        }}
      >
        <Box 
          component='img'
          src={review.albumImages[0].url}
          sx={{
            borderRadius: '50%',
            height: '25px',
            width: '25px',
            backgroundColor: 'grey'
          }}
        />
      </Box>
      <Box
        sx={{
          flex: '90%',
          paddingTop: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 1
        }}
      >
        <Box
          sx={{ 
            flexDirection: 'row',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Typography
            sx={{
              fontSize: '1rem',
              marginRight: 2,
              fontStyle: 'italic'
            }}
          >
            {review.author.username}
          </Typography>
          <Typography
            sx={{
              fontSize: '.8rem'
            }}
          >
            {review.rating}
          </Typography>
          <StarIcon 
            sx={{ 
              color: 'text.light', 
              marginBottom: .4,
              marginRight: 2,
              fontSize: '1rem' 
            }}
          />
          <FavoriteIcon 
            sx={{ 
              color: 'text.light', 
              fontSize: '.8rem',
              marginBottom: .2
            }}
          />
        </Box>
        {/* middle */}
        <Box>
          <Typography
            sx={{
              fontSize: '.9rem'
            }}
          >
            {review.reviewText}
          </Typography>
        </Box>
        {/* bottom */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          {/* TODO Like Button */}
          {/* <IconButton 
            onClick={() => incrementLikes()}
          >
            <FavoriteIcon 
              sx={{ 
                color: 'text.light', 
                fontSize: '.8rem',
                marginBottom: .4 
              }}
            />
          </IconButton> */}
          {/* TODO # of Likes */}
          {/* <Typography
            sx={{
              fontSize: '.8rem'
            }}
          >
            {likes} {likes === 1 ? 'like' : 'likes'}
          </Typography> */}
        </Box>
      </Box>
    </Box>
  )
};

export default AlbumProfileReviewCard;