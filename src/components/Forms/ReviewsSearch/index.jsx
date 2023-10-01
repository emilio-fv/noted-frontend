import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextInput from '../../Inputs/Text';
import SelectInput from '../../Inputs/Select';

const ReviewsSearchForm = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchCategory, setSearchCategory] = useState('album');

  const handleQueryChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
  }

  const handleCategoryChange = (event) => {
    const { value } = event.target;
    setSearchCategory(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO api call
  };


  return (
    <Box
      component='form'
      onSubmit={(event) => handleSubmit(event)}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingY: 2,
        paddingX: '20%'
      }}
    >
      <TextInput
        sx={{
          flex: 3
        }}
        name={'searchQuery'}
        label={'Search Reviews'}
        value={searchQuery}
        handleChange={handleQueryChange}
      />
      <SelectInput 
        sx={{
          flex: 1
        }}
        value={searchCategory}
        handleChange={handleCategoryChange}
      />
    </Box>
  )
};

export default ReviewsSearchForm;