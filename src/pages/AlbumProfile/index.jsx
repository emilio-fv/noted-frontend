import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AlbumProfileReviewCard from '../../components/Cards/Reviews/AlbumProfile';
import { imagePlaceholderURL, sampleFavorites } from '../../assets/data/constants';
import ActionButton from '../../components/Buttons/Action';
import { useOutletContext, useParams } from 'react-router-dom';
import { useGetAlbumsDataQuery } from '../../services/music/musicService';
import { setSelectedAlbumToReview } from '../../features/reviews/reviewsSlice';
import { connect } from 'react-redux';

const AlbumProfile = ({ setSelectedAlbumToReview }) => {
  const { albumId } = useParams();
  const { data: album, isLoading, isError } = useGetAlbumsDataQuery(albumId);
  const [ openModal, setOpenModal ] = useOutletContext();

  const handleLogReviewButton = () => {
    setSelectedAlbumToReview(album);
    setOpenModal('review');
  };

  if (isLoading) {
    return 'Loading';
  }

  if (isError) {
    return 'Error loading page...';
  }

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
      {/* ======= Header ======= */}
      <Box
          sx={{
            gridArea: 'header',
            flexDirection: 'row',
            display: 'flex',
            gap: 3,
          }}
      >
        {/* ======= Album Picture ======= */}
        <Box
          sx={{
            flex: 1,
          }}
        >
          <Box 
            component={'img'}
            src={album.images?.length === 0 ? imagePlaceholderURL : album.images[0].url}
            sx={{
              height: '125px',
              width: '125px',
              backgroundColor: 'grey'
            }}
          />
        </Box>
        {/* ======= Album & Artist Name ======= */}
        <Box
          sx={{
            flex: 3,
            display: 'flex',
            alignItems: 'start',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Typography 
            sx={{
              fontSize: '1.25rem',
              fontStyle: 'italic'
            }}
          >
            {album.name}
          </Typography>
          <Typography 
            sx={{
              fontSize: '1rem'
            }}
          >
            {album.artist.name}
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
        {/* ======= Stats ======= */}
        <Box
          sx={{
            flex: 4, 
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
      {/* ======= Sidebar ======= */}
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
            alignItems: 'start',
            gap: 2,
            paddingY: 2,
            textAlign: 'left',
          }}
        >
          {album.tracks.map((track, index) => {
            return (
              <Typography
                sx={{
                  fontSize: '.75rem'
                }}
                key={index}
                >
                {track.name}
              </Typography>
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
          {/* {sampleFavorites.map((review) => {
            return (
              <AlbumProfileReviewCard />
            )
          })} */}
        </Box>
      </Box>
    </Container>
  )
};

const mapDispatchToProps = {
  setSelectedAlbumToReview
};

export default connect(null, mapDispatchToProps)(AlbumProfile);