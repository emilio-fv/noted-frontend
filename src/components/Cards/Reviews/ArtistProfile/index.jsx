import { Box, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';

const ArtistProfileReviewCard = () => {
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
          // component='img'
          // src={}
          sx={{
            borderRadius: '50%',
            height: '25px',
            width: '25px',
            backgroundColor: 'grey'
          }}
        />
      </Box>
      <Box
        // className='border-check'
        sx={{
          flex: '90%',
          paddingTop: 1,
        }}
      >
        <Box
          sx={{
            flexDirection: 'row',
            display: 'flex',
            alignItems: 'center',
            gap: 2
          }}
        >
          <Typography
            sx={{
              fontSize: '1rem',
              fontStyle: 'italic',
            }}
          >
            Album Name
          </Typography>
        </Box>
        <Box
          sx={{ 
            flexDirection: 'row',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Typography
            sx={{
              fontSize: '.8rem',
              marginRight: 2
            }}
          >
            Review by username
          </Typography>
          <Typography
            sx={{
              fontSize: '.8rem'
            }}
          >
            5
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
              marginBottom: .4 
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra in ex at eleifend. Donec ut arcu eros. Vestibulum vulputate tempus tristique.
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
          {/* Like Button */}
          <IconButton 
            onClick={() => incrementLikes()}
          >
            <FavoriteIcon 
              sx={{ 
                color: 'text.light', 
                fontSize: '.8rem',
                marginBottom: .4 
              }}
            />
          </IconButton>
          {/* # of Likes */}
          <Typography
            sx={{
              fontSize: '.8rem'
            }}
          >{likes} {likes === 1 ? 'like' : 'likes'}</Typography>
        </Box>
      </Box>
    </Box>
  )
};

export default ArtistProfileReviewCard;