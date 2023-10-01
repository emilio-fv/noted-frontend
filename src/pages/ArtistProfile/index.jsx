import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { sampleFavorites, sampleReviews } from '../../assets/constants';
import AlbumCard from '../../components/Cards/Music/Album';
import ArtistProfileReviewCard from '../../components/Cards/Reviews/ArtistProfile';

const ArtistProfile = () => {
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
        {/* Artist Picture */}
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
                borderRadius: '50%',
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
          }}
        >
          <Typography 
            sx={{
              // textAlign: 'center'
              fontSize: '1.5rem'
            }}
          >
            Artist Name
          </Typography>
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
        <Typography>Discography</Typography>
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
          {sampleFavorites.map((favorite) => {
            return (
              <AlbumCard profileCard={true} maxWidth={'150px'}/>
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
          {sampleReviews.map((review) => {
            return (
              <ArtistProfileReviewCard />
            )
          })}
        </Box>
      </Box>
    </Container>
  )
};

export default ArtistProfile;