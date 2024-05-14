import { Box, Rating, TextField, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import TextInput from '../../Inputs/Text';
import ActionButton from '../../Buttons/Action';
import { connect } from 'react-redux';
import { useCreateReviewMutation } from '../../../services/reviews/reviewsService';

const today = dayjs();

const CreateReviewForm = ({ albumData, handleOpenModal }) => {
  const [formData, setFormData] = useState({
    album: albumData?.name,
    albumId: albumData?.id,
    artist: albumData?.artist.name,
    artistId: albumData?.artist.id,
    rating: 0,
    reviewText: null,
    albumImages: albumData?.images,
  });

  const [reviewDate, setReviewDate] = useState(dayjs(Date.now()));
  const [errors, setErrors] = useState(null);

  const [ createReview, { data, isSuccess, isError, error }] = useCreateReviewMutation();

  useEffect(() => {
    if (isError) {
      console.log(error);
    }

    if (isSuccess) {
      handleOpenModal(false);
    }
  }, [isSuccess, isError])

  const handleFormChanges = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
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
      setErrors(null);
      createReview({
        ...formData,
        date: reviewDate.$d,
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
            src={albumData?.images[0].url}
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
              {albumData?.name}
            </Typography>
            <Typography 
              sx={{
                fontSize: '1rem'
              }}
            >
              {albumData?.artist.name}
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
      </Box>
    </>
  )
};

const mapStateToProps = (state) => {
  return {
    albumData: state.reviews.selectedAlbumToReview,
  }
};

export default connect(mapStateToProps)(CreateReviewForm);