import React from 'react';
import Hero from '../../components/Hero';

const fakeAlbumCovers = [
  {
    src: require('../../assets/images/album-demo.png'),
  },
  {
    src: require('../../assets/images/album-demo.png'),
  },
  {
    src: require('../../assets/images/album-demo.png'),
  },
  {
    src: require('../../assets/images/album-demo.png'),
  },
  {
    src: require('../../assets/images/album-demo.png'),
  },
]

const LandingPage = () => {
  return (
    <Hero albumCovers={fakeAlbumCovers}/>
  )
};

export default LandingPage;