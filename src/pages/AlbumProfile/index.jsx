import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AlbumProfileReviewCard from '../../components/Cards/Reviews/AlbumProfile';
import { sampleFavorites } from '../../assets/data/constants';
import ActionButton from '../../components/Buttons/Action';
import { useOutletContext } from 'react-router-dom';

const AlbumProfile = () => {
  const setOpenModal = useOutletContext();

  const handleLogReviewButton = () => {
    setOpenModal('review');
  };

  return (
  <Container
      maxWidth='md'
      sx={{
        display: 'grid',
        gridTemplateAreas: `
          "header header header header"
          "sidebar content content content"
        `,
        gridTemplateColumns: '1fr 2fr',
        gap: 3,
      }}
    >
      {/* Header */}
      <Box
          sx={{
            gridArea: 'header',
            flexDirection: 'row',
            display: 'flex',
            gap: 3,
          }}
      >
        {/* Album Picture */}
        <Box
            sx={{
              flex: 1,
            }}
          >
            <Box 
              // TODO:
              // component={}
              // src={}
              sx={{
                height: '125px',
                width: '125px',
                backgroundColor: 'grey'
              }}
            />
          </Box>
        {/* Artist Name */}
        <Box
          sx={{
            flex: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Typography 
            sx={{
              // textAlign: 'center'
              fontSize: '1.5rem',
              fontStyle: 'italic'
            }}
          >
            Album Name
          </Typography>
          <Typography 
            sx={{
              // textAlign: 'center'
              fontSize: '1rem'
            }}
          >
            Artist Name
          </Typography>
          <ActionButton 
            handleClick={handleLogReviewButton}
            sx={{
              fontSize: '.6rem',
              maxHeight: '18px',
              display: 'flex',
              alignItems: 'center',
              marginTop: 1,
            }}
            text={'Log review'}
          />
        </Box>
        {/* Stats */}
        <Box
          sx={{
            flex: 8, 
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'center',
            gap: 3,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Typography>134</Typography>
            <Typography>Reviews</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Typography>4.5 &#9733;</Typography>
            <Typography>Average Rating</Typography>
          </Box>
        </Box>
      </Box>
      {/* Sidebar */}
      <Box
        sx={{
          gridArea: 'sidebar',
        }}
      >
        <Typography>Track List</Typography>
        <Box
          sx={{ 
            borderTop: '1px solid',
            borderColor: 'text.light',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
            paddingY: 2,
          }}
        >
          {sampleFavorites.map((favorite, index) => {
            return (
              <Typography>Track {index++}</Typography>
            )
          })}
        </Box>
      </Box>
      <Box
        sx={{
          gridArea: 'content',
        }}
      >
        <Typography>Recent Reviews</Typography>
        <Box
          sx={{ 
            borderTop: '1px solid',
            borderColor: 'text.light',
            display: 'flex',
            flexDirection: 'column',
            paddingY: 2,
            gap: 2,
          }}
        >
          {sampleFavorites.map((review) => {
            return (
              <AlbumProfileReviewCard />
            )
          })}
        </Box>
      </Box>
    </Container>
  )
};

export default AlbumProfile;