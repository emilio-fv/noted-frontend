import React, { useState } from 'react';
import MusicSearchForm from '../../components/Forms/MusicSearch';
import MusicSearchResults from '../../components/SearchResults/Music';
import LoadingScreen from '../../components/LoadingScreen';

const MusicPage = () => {
  return (
    <>
      <MusicSearchForm />
      <MusicSearchResults />
    </>
  )
};

export default MusicPage;