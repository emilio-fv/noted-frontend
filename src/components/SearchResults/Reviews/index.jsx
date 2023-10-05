import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AlbumCard from '../../Cards/Music/Album';
import ReviewCard from '../../Cards/Reviews/SearchResult';
import ArtistCard from '../../Cards/Music/Artist';
import UserCard from '../../Cards/User';
import { sampleReviews } from '../../../assets/data/constants';

const ReviewsSearchResults = () => {
  const [category, setCategory] = useState('user');

  let leftContent;

  if (category === 'album') {
    leftContent = <AlbumCard maxWidth={'100px'}/>
  } else if (category === 'artist') {
    leftContent = <ArtistCard />;
  } else if (category === 'user') {
    leftContent = <UserCard />;
  }

  // TODO: handle conditionally setting results based on search category
  return (
    <Container
      maxWidth='md'
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        flexWrap: 'wrap',
      }}
    >
      <Box
        sx={{
          flex: 1,
          padding: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'start',
        }}
      >
        {leftContent}
      </Box>
      <Box
        sx={{
          flex: 5,
          padding: 2,
        }}
      >
        <Typography>Recent Reviews</Typography>
        <Box
          sx={{
            borderTop: '1px solid',
            borderTopColor: 'text.light',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            paddingY: 2,
          }}
        >
          {sampleReviews.map((review) => {
            return (
              <ReviewCard />
            )
          })}
        </Box>
      </Box>
    </Container>
  )
};

export default ReviewsSearchResults;