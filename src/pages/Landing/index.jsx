import React from 'react';
import Hero from '../../components/Hero';
import { useGetFeaturedAlbumsQuery } from '../../services/music/musicService';
import LoadingScreen from '../../components/LoadingScreen';

const LandingPage = () => {
  const { data, isLoading } = useGetFeaturedAlbumsQuery();

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <Hero featuredAlbums={data}/>
  )
};

export default LandingPage;