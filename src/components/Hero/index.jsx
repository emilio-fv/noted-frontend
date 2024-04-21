import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ActionButton from '../Buttons/Action';
import Image from 'mui-image';

const imgStyles = {
};

const textStyles = {
  color: 'text.light',
};

// Styling for album covers (left to right)
const albumCoverStyling = [
  {
    position: 'relative',
    left: '40%',
    marginTop: { xs: 0, sm: 0, md: -5, lg: -10 },
    zIndex: -2
  },
  {
    position: 'relative',
    zIndex: -1,
    left: '10%',
    marginTop: { xs: 5, sm: 10, md: 5, lg: 0 },
  },
  {
    marginTop: { xs: 10, sm: 20, md: 15, lg: 10 },
  },
  {
    position: 'relative',
    zIndex: -1,
    right: '10%',
    marginTop: { xs: 5, sm: 10, md: 5, lg: 0 },
  },
  {
    position: 'relative',
    zIndex: -2,
    right: '40%',
    marginTop: { xs: 0, sm: 0, md: -5, lg: -10 },
  },
]

const Hero = ({ albumCovers }) => {
  // Model helpers
  const [handleOpenModal] = useOutletContext();

  // Join Noted button click handler
  const handleJoinNotedClick = () => {
    handleOpenModal('register');
  };

  // TODO: API call to get featured albums

  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          display: 'flex',
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
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 2.5
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
          <Typography 
            variant='h6'
            sx={{ 
              ...textStyles, 
            }}
          >
            Track the music you listen to
          </Typography>
          <Typography 
            variant='h6'
            sx={{ 
              ...textStyles, 
            }}
          >
            Rate and review
          </Typography>
          <Typography 
            variant='h6'
            sx={{ 
              ...textStyles, 
            }}
          >
            Share with your friends
          </Typography>
        </Box>
        <ActionButton
          sx={{
            marginY: 3,
          }}
          handleClick={handleJoinNotedClick}
          text={'Join Noted'}
        />
        <Typography 
          variant='caption'
          sx={{ 
            ...textStyles, 
          }} 
        >
          A social network for music lovers
        </Typography>
      </Box>
    </Box>
  )
};

export default Hero;