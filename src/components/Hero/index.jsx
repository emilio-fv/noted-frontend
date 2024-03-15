import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ActionButton from '../Buttons/Action';
import Image from 'mui-image';

const imgStyles = {
  height: 'auto',
  width: 'auto',
};

const textStyles = {
  color: 'text.light'
};

// Styling for album covers - from left to right
const albumCoverStyling = [
  {
    maxHeight: '70%',
    maxWidth: '70%',
    position: 'relative',
    left: '40%',
    marginTop: { xs: -2, sm: 0 },
    zIndex: -2
  },
  {
    maxHeight: '85%',
    maxWidth: '85%',
    position: 'relative',
    zIndex: -1,
    left: '10%',
    marginTop: { xs: 4, sm: 0 }
  },
  {
    maxHeight: '100%',
    maxWidth: '100%',
    marginTop: { xs: 10, sm: 0 }
  },
  {
    maxHeight: '85%',
    maxWidth: '85%',
    position: 'relative',
    zIndex: -1,
    right: '10%',
    marginTop: { xs: 4, sm: 0 }
  },
  {
    maxHeight: '70%',
    maxWidth: '70%',
    position: 'relative',
    zIndex: -2,
    right: '40%',
    marginTop: { xs: -2, sm: 0 },
  },
]

const Hero = ({ albumCovers }) => {
  // Model helpers
  const [handleOpenModal] = useOutletContext();

  // Join Noted button click handler
  const handleJoinNotedClick = () => {
    handleOpenModal('register');
  };

  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 2,
        }}
      >
        <Image
          fit={'contain'}
          sx={{...imgStyles, ...albumCoverStyling[0]}}
          src={albumCovers[0].src}
          srcSet={albumCovers[0].srcSet}
          alt={albumCovers[0].alt}
        />
        <Image
          fit={'contain'}
          sx={{...imgStyles, ...albumCoverStyling[1]}}
          src={albumCovers[1].src}
          srcSet={albumCovers[1].srcSet}
          alt={albumCovers[1].alt}
          // height={'80%'}
          // width={'100%'}
        />
        <Image
          fit={'contain'}
          sx={{...imgStyles, ...albumCoverStyling[2]}}
          src={albumCovers[2].src}
          srcSet={albumCovers[2].srcSet}
          alt={albumCovers[2].alt}
        />
        <Image
          fit={'contain'}
          sx={{...imgStyles, ...albumCoverStyling[3]}}
          src={albumCovers[3].src}
          srcSet={albumCovers[3].srcSet}
          alt={albumCovers[3].alt}
        />
        <Image
          fit={'contain'}
          sx={{...imgStyles, ...albumCoverStyling[4]}}
          src={albumCovers[4].src}
          srcSet={albumCovers[4].srcSet}
          alt={albumCovers[4].alt}
        />
      </Box>
      <Box
        sx={{
          paddingY: { xs: '2.5vh', sm: '5vh', md: 0 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1.5,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant='h5' sx={{ ...textStyles }}>
            Track the music you listen to.
          </Typography>
          <Typography variant='h5' sx={{ ...textStyles }}
          >
            Rate and review.
          </Typography>
          <Typography variant='h5' sx={{ ...textStyles }}
          >
            Share with your friends.
          </Typography>
        </Box>
        <ActionButton
          sx={{
            marginY: 3,
          }}
          handleClick={handleJoinNotedClick}
          text={'Join Noted'}
        />
        <Typography sx={{ ...textStyles }} fontSize={'1rem'}>
          A social network for music enthusiasts
        </Typography>
      </Box>
    </Box>
  )
};

export default Hero;