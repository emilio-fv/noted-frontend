import { Box, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useLikeReviewMutation, useUnlikeReviewMutation } from '../../../../services/reviews/reviewsService';
import { connect } from 'react-redux';

const ArtistProfileReviewCard = ({ review, loggedInUsersUsername }) => {
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
            {review.album}
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
            Review by {review.author.username}
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
          {review.favorite 
            ? <FavoriteIcon 
                sx={{ 
                  color: 'text.light', 
                  fontSize: '.8rem',
                  marginBottom: .4 
                }}
              />
            : null
          }
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

export default connect(mapStateToProps)(ArtistProfileReviewCard);