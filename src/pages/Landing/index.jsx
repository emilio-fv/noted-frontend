import React from 'react';
import Hero from '../../components/Hero';
import { useGetFeaturedAlbumsQuery } from '../../services/music/musicService';
import LoadingScreen from '../../components/LoadingScreen';
import { useLoaderData } from 'react-router-dom';

const LandingPage = () => {
  const data = useLoaderData();

  return (
    <Hero featuredAlbums={data}/>
  )
};

export default LandingPage;