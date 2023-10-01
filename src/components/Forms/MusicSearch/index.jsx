import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextInput from "../../Inputs/Text";

const MusicSearchForm = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChanges = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: api call
  };

  return (
    <Box
      component='form'
      onSubmit={(event) => handleSubmit(event)}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingY: 2,
      }}
    >
      <TextInput 
        sx={{
          maxWidth: '50%',
        }}
        name={'searchQuery'}
        label={'Search Music'}
        value={searchQuery}
        handleChange={handleChanges}
      />
    </Box>
  )
};

export default MusicSearchForm;