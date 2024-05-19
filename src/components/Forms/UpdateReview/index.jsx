import { Box, Button, IconButton, Rating, TextField, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import TextInput from '../../Inputs/Text';
import ActionButton from '../../Buttons/Action';
import { connect } from 'react-redux';
import { useUpdateReviewMutation } from '../../../services/reviews/reviewsService';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const today = dayjs();

const UpdateReviewForm = ({ reviewData, handleOpenModal, handleCloseModal }) => {
  const [formData, setFormData] = useState({
    album: reviewData.album,
    albumId: reviewData.albumId,
    artist: reviewData.artist,
    artistId: reviewData.artistId,
    rating: reviewData.rating,
    reviewText: reviewData.reviewText,
    albumImages: reviewData.albumImages,
  });

  const [reviewDate, setReviewDate] = useState(dayjs(reviewData.date, 'MM/DD/YYYY'));
  const [favorite, setFavorite] = useState(reviewData.favorite);
  const [errors, setErrors] = useState(null);

  const [ updateReview, { isSuccess, isError, error }] = useUpdateReviewMutation();

  useEffect(() => {
    if (isSuccess) {
      handleOpenModal(false);
    }
  }, [isSuccess, isError])

  const handleFormChanges = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCancelButtonClick = () => {
    handleCloseModal();
  };

  const handleDateChange = (value) => {
    setReviewDate(value);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (formData.reviewText === null) {
      setErrors({
        reviewText: 'Required field.'
      })
      return;
    } else {
      const formattedDate = dayjs(reviewDate).format('MM/DD/YYYY')

      setErrors(null);

      console.log({
        ...formData,
        date: formattedDate,
        favorite: favorite,
      });

      updateReview({
        reviewId: reviewData._id,
        reviewData: {
          ...formData,
          date: formattedDate,
          favorite: favorite,
        }
      })
    }
  }

  return (
    <>
      <Typography
        variant='h6' 
        sx={{ 
          color: 'text.light',
          marginBottom: 1
        }}
      >
        Create Review
      </Typography>
      <Box
        component={'form'}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
        }}
        onSubmit={(event) => handleFormSubmit(event)}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 2, 
          }}
        >
          <Box 
            // TODO: pass in album image url
            component={'img'}
            src={reviewData?.albumImages[0].url}
            sx={{
              height: '125px',
              width: '125px',
              backgroundColor: 'grey'
            }}
          />
          <Box
            sx={{
              flexDirection: 'column',
              display: 'flex',
              justifyContent: 'center',
              textAlign: 'center'
            }}
          >
            <Typography 
              sx={{
                fontSize: '1.5rem',
                fontStyle: 'italic'
              }}
            >
              {reviewData?.albumName}
            </Typography>
            <Typography 
              sx={{
                fontSize: '1rem'
              }}
            >
              {reviewData?.artist.name}
            </Typography>
          </Box>
        </Box>
        {/* Date */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 2, 
          }}
        >
          <Typography>Date</Typography>
          <DatePicker 
            maxDate={today}
            value={reviewDate}
            onChange={(value) => handleDateChange(value)}
          />
        </Box>
        {/* Rating */}
        <Box 
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 2, 
          }}
        >
          <Typography>Rating</Typography>
          <Rating 
            name='rating'
            defaultValue={today}
            value={formData.rating}
            onChange={(event) => handleFormChanges(event)}
            precision={0.5}
          />
          <IconButton size='small' onClick={() => setFavorite(!favorite)} sx={{ color: 'text.light' }} >
            {favorite 
              ? <FavoriteIcon />
              : <FavoriteBorderIcon />
            }
          </IconButton>
        </Box>
        <TextInput 
          required
          multiline={true}
          rows={4}
          label={'Review'}
          name={'reviewText'}
          value={formData.reviewText}
          handleChange={handleFormChanges}
          error={errors?.reviewText ? errors.reviewText : false}
          helperText={errors?.reviewText ? errors.reviewText : ''}
        />
        <ActionButton 
          text={'Submit'}
          handleClick={handleFormSubmit}
          sx={{
            // TODO update styling
          }}
        />
        <Button 
            variant='contained' 
            color='secondary'
            size='small'
            onClick={handleCancelButtonClick}
        >
            Cancel
        </Button>
      </Box>
    </>
  )
};

const mapStateToProps = (state) => {
  return {
    reviewData: state.reviews.selectedReviewToUpdate,
  }
};

export default connect(mapStateToProps)(UpdateReviewForm);