import React from 'react';
import Hero from '../../components/Hero';


const fakeAlbumCovers = [
  {
    src: 'https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228',
  },
  {
    src: 'https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228',
  },
  {
    src: 'https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228',
  },
  {
    src: 'https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228',
  },
  {
    src: 'https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228',
  },
]

const LandingPage = () => {
  return (
    <Hero albumCovers={fakeAlbumCovers}/>
  )
};

export default LandingPage;