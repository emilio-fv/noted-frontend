import { Box, Rating, TextField, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import TextInput from '../../Inputs/Text';
import ActionButton from '../../Buttons/Action';

const initialState = {
  rating: 0,
  review: '',
};

const today = dayjs();

const LogReviewForm = ({ setOpenModal }) => {
  const [formData, setFormData] = useState(initialState);
  const [reviewDate, setReviewDate] = useState(dayjs(Date.now()));

  const handleFormChanges = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (value) => {
    setReviewDate(value);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(formData, reviewDate);
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
        Log Review
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
        {/* display album info */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 2, 
          }}
        >
          <Box 
            // TODO:
            // component={}
            // src={}
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
              Album Name
            </Typography>
            <Typography 
              sx={{
                fontSize: '1rem'
              }}
            >
              Artist Name
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
          multiline={true}
          rows={4}
          label={'Review'}
          name={'review'}
          value={formData.review}
          handleChange={handleFormChanges}
          // error={}
        />
        <ActionButton 
          text={'Submit'}
          // handleClick={}
          sx={{

          }}
        />
      </Box>
    </>
  )
};

export default LogReviewForm;