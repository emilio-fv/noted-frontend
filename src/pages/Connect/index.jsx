import { Typography } from '@mui/material';
import React from 'react';
import UserSearchForm from '../../components/Forms/UserSearch';
import UserSearchResults from '../../components/SearchResults/Connect';

const ConnectPage = () => {
  return (
    <>
      <UserSearchForm />
      <UserSearchResults />
    </>
  )
};

export default ConnectPage;