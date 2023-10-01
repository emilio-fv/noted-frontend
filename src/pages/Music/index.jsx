import React from 'react';
import MusicSearchForm from '../../components/Forms/MusicSearch';
import MusicSearchResults from '../../components/SearchResults/Music';

const MusicPage = () => {
  return (
    <>
      <MusicSearchForm />
      <MusicSearchResults />
    </>
  )
};

export default MusicPage;