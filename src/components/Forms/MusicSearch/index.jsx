import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import TextInput from "../../Inputs/Text";
import { useQuerySpotifyMutation } from "../../../services/music/musicService";

const MusicSearchForm = ({ setLoadingState }) => {
  const [ querySpotify, { isLoading, isSuccess, reset }] = useQuerySpotifyMutation();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    return () => {
      reset();
    };
  }, []);

  const handleChanges = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    querySpotify({
      spotifyQuery: searchQuery,
      offset: 0,
    });
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