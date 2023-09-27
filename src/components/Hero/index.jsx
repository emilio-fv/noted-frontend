import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ActionButton from '../Buttons/Action';
import { Modal } from '@mui/material';
import RegisterForm from '../Forms/Register';
import { useOutletContext } from 'react-router-dom';

const imgStyles = {
  height: 'auto',
  width: 'auto',
};

const textStyles = {
  color: 'text.light'
};

const Hero = () => {
  // Register form modal helpers
  const setOpenModal = useOutletContext();
  // const [openJoinNotedModal, setOpenJoinNotedModal] = useState(false);
  // const handleOpenJoinNotedModal = () => setOpenJoinNotedModal(true);
  // const handleCloseJoinNotedModal = () => setOpenJoinNotedModal(false);

  const handleJoinNotedClick = () => {
    setOpenModal('register');
  };

  return (
    <>    
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
            sx={{
              ...imgStyles,
              maxHeight: { xs: '90px', sm: '120px', md: '60%' },
              maxWidth: { xs: '90px', sm: '120px', md: '60%' },
              position: 'relative',
              left: { xs: '30%', sm: '5%'},
              bottom: { xs: '20%', sm: 0 },
              zIndex: -2
            }}
            src={require('../../assets/album-demo.png')}
            // src={featured[4].images[0].url}
          />
          <Box 
            component='img'
            sx={{
              ...imgStyles,
              maxHeight: { xs: '120px', sm: '160px', md: '80%' },
              maxWidth: { xs: '120px', sm: '160px', md: '80%' },
              position: 'relative',
              zIndex: -1,
              left: { xs: '15%', sm: '5%'},
            }}
            src={require('../../assets/album-demo.png')}
            // src={featured[2].images[0].url}
          />
          {/* Middle */}
          <Box 
            component='img'
            sx={{
              ...imgStyles,
              maxHeight: { xs: '150px', sm: '200px', md: '100%' },
              maxWidth: { xs: '150px', sm: '200px', md: '100%' },
              marginTop: { xs: 8, sm: 0 }
            }}
            src={require('../../assets/album-demo.png')}
            // src={featured[0].images[0].url}
          />
          <Box 
            component='img'
            sx={{
              ...imgStyles,
              maxHeight: { xs: '120px', sm: '160px', md: '80%' },
              maxWidth: { xs: '120px', sm: '160px', md: '80%' },
              position: 'relative',
              right: { xs: '15%', sm: '5%'},
              zIndex: -1
            }}
            src={require('../../assets/album-demo.png')}
            // src={featured[1].images[0].url}
          />
          <Box 
            component='img'
            sx={{
              ...imgStyles,
              maxHeight: { xs: '90px', sm: '120px', md: '60%' },
              maxWidth: { xs: '90px', sm: '120px', md: '60%' },
              position: 'relative',
              zIndex: -2,
              right: { xs: '30%', sm: '5%'},
              bottom: { xs: '20%', sm: 0 },
            }}
            src={require('../../assets/album-demo.png')}
            // src={featured[3].images[0].url}
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
            The social network for music enthusiasts
          </Typography>
        </Box>
      </Box>
    </>
  )
};

export default Hero;