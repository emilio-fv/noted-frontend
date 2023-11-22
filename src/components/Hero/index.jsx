import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ActionButton from '../Buttons/Action';

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
    maxHeight: { xs: '90px', sm: '120px', md: '60%' },
    maxWidth: { xs: '90px', sm: '120px', md: '60%' },
    position: 'relative',
    left: { xs: '30%', sm: '5%'},
    bottom: { xs: '20%', sm: 0 },
    zIndex: -2
  },
  {
    maxHeight: { xs: '120px', sm: '160px', md: '80%' },
    maxWidth: { xs: '120px', sm: '160px', md: '80%' },
    position: 'relative',
    zIndex: -1,
    left: { xs: '15%', sm: '5%'},
  },
  {
    maxHeight: { xs: '150px', sm: '200px', md: '100%' },
    maxWidth: { xs: '150px', sm: '200px', md: '100%' },
    marginTop: { xs: 8, sm: 0 }
  },
  {
    maxHeight: { xs: '120px', sm: '160px', md: '80%' },
    maxWidth: { xs: '120px', sm: '160px', md: '80%' },
    position: 'relative',
    right: { xs: '15%', sm: '5%'},
    zIndex: -1
  },
  {
    maxHeight: { xs: '90px', sm: '120px', md: '60%' },
    maxWidth: { xs: '90px', sm: '120px', md: '60%' },
    position: 'relative',
    zIndex: -2,
    right: { xs: '30%', sm: '5%'},
    bottom: { xs: '20%', sm: 0 },
  },
]

const Hero = ({ albumCovers }) => {
  // Model helpers
  const setOpenModal = useOutletContext();

  // Join Noted button click handler
  const handleJoinNotedClick = () => {
    setOpenModal('register');
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
          paddingY: { xs: '5%', md: '2.5%'},
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box 
          component='img'
          sx={{...imgStyles, ...albumCoverStyling[0]}}
          src={albumCovers[0].src}
          srcSet={albumCovers[0].srcSet}
          alt={albumCovers[0].alt}
        />
        <Box 
          component='img'
          sx={{...imgStyles, ...albumCoverStyling[1]}}
          src={albumCovers[1].src}
          srcSet={albumCovers[1].srcSet}
          alt={albumCovers[1].alt}
        />
        <Box 
          component='img'
          sx={{...imgStyles, ...albumCoverStyling[2]}}
          src={albumCovers[2].src}
          srcSet={albumCovers[2].srcSet}
          alt={albumCovers[2].alt}
        />
        <Box 
          component='img'
          sx={{...imgStyles, ...albumCoverStyling[3]}}
          src={albumCovers[3].src}
          srcSet={albumCovers[3].srcSet}
          alt={albumCovers[3].alt}
        />
        <Box 
          component='img'
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