import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextInput from "../../Inputs/Text";
import { useQueryUsersMutation } from '../../../services/connect/connectService';

const UserSearchForm = () => {
  const [ queryUsers, { isLoading, reset }] = useQueryUsersMutation();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    return () => {
      reset();
    }
  }, []);

  const handleChanges = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    queryUsers(searchQuery);
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
        label={'Search Users'}
        value={searchQuery}
        handleChange={handleChanges}
      />
    </Box>
  )
};

export default UserSearchForm;