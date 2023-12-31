import React, { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const UserProfileReviewCard = () => {
  const [isReviewCreator, setIsReviewCreator] = useState(true); 
  const [likes, setLikes] = useState(0);

  const incrementLikes = () => {
    setLikes((likes) => likes+1);
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box 
          // component='img'
          // src={}
          sx={{
            height: '50px',
            width: '50px',
            backgroundColor: 'grey'
          }}
        />
      </Box>
      <Box
        sx={{
          flex: 6
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            // gap: 1,
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: 1,
              alignItems: 'center'
            }}
          >
            <Typography
              sx={{
                fontStyle: 'italic',
                fontSize: '.85rem'
              }}
            >
              Album Name
            </Typography>
            <Typography
              sx={{
                fontSize: '.85rem',
                marginRight: 1
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
            <FavoriteIcon 
              sx={{ 
                color: 'text.light', 
                fontSize: '.8rem',
                marginBottom: .2 
              }}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around'
            }}
          >
            {isReviewCreator 
              ? <>
                <IconButton onClick={null} sx={{ fontSize: '.75rem', color: 'text.light' }}>
                  <EditIcon fontSize='inherit' />
                </IconButton>
                <IconButton onClick={null} sx={{ fontSize: '.75rem', color: 'text.light' }}>
                  <DeleteIcon fontSize='inherit'/>
                </IconButton>
              </>
              : null
            }
          </Box>
        </Box>
        <Typography
          sx={{
            fontSize: '.9rem',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra in ex at eleifend. Donec ut arcu eros. Vestibulum vulputate tempus tristique.
        </Typography>
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
        <Box></Box>
      </Box>
    </Box>
  )
};

export default UserProfileReviewCard;
