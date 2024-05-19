import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { imagePlaceholderURL, sampleFavorites, sampleReviews } from '../../assets/data/constants';
import AlbumCard from '../../components/Cards/Music/Album';
import ArtistProfileReviewCard from '../../components/Cards/Reviews/ArtistProfile';
import { useGetArtistsDataQuery } from '../../services/music/musicService';
import { useParams } from 'react-router-dom';
import { useGetReviewsByArtistQuery } from '../../services/reviews/reviewsService';

const ArtistProfile = () => {
  const { artistId } = useParams();
  const { data: artist, isLoading: isLoadingArtist, isError: isErrorArtist, } = useGetArtistsDataQuery(artistId);
  const { data: reviews, isLoading: isLoadingReviews, isError: isErrorReviews } = useGetReviewsByArtistQuery(artistId);

  if (isErrorArtist || isErrorArtist) {
    return null;
  }

  if (isLoadingArtist || isLoadingArtist) {
    return 'Loading';
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
        {/* ======= Artist Picture ======= */}
        <Box
            sx={{
              flex: 1,
            }}
          >
            <Box 
              component={'img'}
              src={artist.images?.length === 0 ? imagePlaceholderURL : artist.images[0].url}
              sx={{
                height: '125px',
                maxWidth: '125px',
                objectFit: 'cover',
                borderRadius: '50%',
                backgroundColor: 'grey'
              }}
            />
          </Box>
        {/* ======= Artist Name ======= */}
        <Box
          sx={{
            flex: 3,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Typography 
            sx={{
              fontSize: '1.5rem'
            }}
          >
            {artist.name}
          </Typography>
        </Box>
        {/* ======= Stats ======= */}
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
            <Typography>{reviews?.length}</Typography>
            <Typography>Reviews</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            {/* TODO average rating */}
            {/* <Typography>4.5 &#9733;</Typography>
            <Typography>Average Rating</Typography> */}
          </Box>
        </Box>
      </Box>
      {/* =======  Sidebar ======= */}
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
            paddingY: 4,
          }}
        >
          {artist.discography.map((album) => {
            return (
              <AlbumCard width={'150px'} profileCard={true} album={album}/>
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
          {reviews?.map((review, index) => {
            return (
              <ArtistProfileReviewCard key={index} review={review}/>
            )
          })}
        </Box>
      </Box>
    </Container>
  )
};

export default ArtistProfile;