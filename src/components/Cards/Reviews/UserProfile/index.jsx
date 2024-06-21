import React, { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useLikeReviewMutation, useUnlikeReviewMutation } from '../../../../services/reviews/reviewsService';
import { connect } from 'react-redux';

const UserProfileReviewCard = ({ review, isAuthor, loggedInUsersUsername }) => { 
  const [ likeReview ] = useLikeReviewMutation();
  const [ unlikeReview ] = useUnlikeReviewMutation();

  const handleLikeReviewButton = () => {
    likeReview(review._id);
  };
  
  const handleUnlikeReviewButton = () => {
    unlikeReview(review._id);
  };

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
          component='img'
          src={review.albumImages[0].url}
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
              {review.album}
            </Typography>
            <Typography
              sx={{
                fontSize: '.85rem',
                marginRight: 1
              }}
            >
              {review.artist}
            </Typography>
            <Typography
              sx={{
                fontSize: '.75rem',
              }}
            >
              {review.rating} &#9733;
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
            {/* {isAuthor 
              ? <>
                <IconButton onClick={null} sx={{ fontSize: '.75rem', color: 'text.light' }}>
                  <EditIcon fontSize='inherit' />
                </IconButton>
                <IconButton onClick={null} sx={{ fontSize: '.75rem', color: 'text.light' }}>
                  <DeleteIcon fontSize='inherit'/>
                </IconButton>
              </>
              : null
            } */}
          </Box>
        </Box>
        <Typography
          sx={{
            fontSize: '.9rem',
          }}
        >
          {review.reviewText}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          {/* Like/Unlike Button */}
          {review.likes.includes(loggedInUsersUsername)
            ? <IconButton 
                onClick={() => handleUnlikeReviewButton()}
              >
                <FavoriteIcon 
                  sx={{ 
                    color: 'text.light', 
                    fontSize: '.8rem',
                    marginBottom: .4 
                  }}
                />
              </IconButton>
            : <IconButton 
                onClick={() => handleLikeReviewButton()}
              >
                <FavoriteBorderIcon 
                  sx={{ 
                    color: 'text.light', 
                    fontSize: '.8rem',
                    marginBottom: .4 
                  }}
                />
              </IconButton>
          }
          {/* # of Likes */}
          <Typography
            sx={{
              fontSize: '.8rem'
            }}
          >
            {review.likes.length} {review.likes.length === 1 ? 'like' : 'likes'}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
};

const mapStateToProps = (state) => {
  return {
    loggedInUsersUsername: state.auth.loggedInUser.username
  }
};

export default connect(mapStateToProps)(UserProfileReviewCard);