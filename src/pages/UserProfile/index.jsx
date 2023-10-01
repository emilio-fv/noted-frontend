import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ActionButton from '../../components/Buttons/Action';
import { sampleFavorites, sampleReviews } from '../../assets/constants';
import FavoriteCard from '../../components/Cards/Favorite';
import UserProfileReviewCard from '../../components/Cards/Reviews/UserProfile';

const UserProfile = () => {
  const [followingStatus, setFollowingStatus]= useState(false);

  const handleFollowButtonClick = () => {
    setFollowingStatus(!followingStatus);
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
      <Box
        sx={{
          gridArea: 'header',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row'},
          paddingY: 2, 
        }}
      >
        {/* Header */}
        <Box
          sx={{
            flex: 3,
            flexDirection: 'row',
            display: 'flex',
            gap: 2,
          }}
        >
          {/* Profile picture */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box 
              // TODO:
              // component={}
              // src={}
              sx={{
                height: '50px',
                width: '50px',
                borderRadius: '50%',
                backgroundColor: 'grey'
              }}
            />
          </Box>
          <Box
            sx={{
              flex: 3,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: .5
            }}
            >
            {/* Username */}
            <Typography
              sx={{
                fontSize: '1rem'
              }}
            >
              Username
            </Typography>
            <Typography
              sx={{
                fontSize: '.75rem'
              }}
            >
              Member since Aug 2023
            </Typography>
            <ActionButton 
              handleClick={handleFollowButtonClick}
              sx={{
                maxWidth: '20%',
                fontSize: '.6rem',
                maxHeight: '18px',
                display: 'flex',
                alignItems: 'center',
                marginLeft: 2,
              }}
              text={ followingStatus ? 'Unfollow' : 'Follow' }/>
          </Box>
        </Box>
        {/* Profile stats */}
        <Box
          sx={{
            flex: 4,
            display: 'flex',
            justifyContent: 'end',
            gap: 2,
            paddingY: { xs: 2, md: 0 },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Typography sx={{ fontSize: '.75rem' }}>23</Typography>
            <Typography sx={{ fontSize: '.75rem' }}>Reviews</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Typography sx={{ fontSize: '.75rem' }}>23</Typography>
            <Typography sx={{ fontSize: '.75rem' }}>This Year</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Typography sx={{ fontSize: '.75rem' }}>23</Typography>
            <Typography sx={{ fontSize: '.75rem' }}>Followers</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Typography sx={{ fontSize: '.75rem' }}>23</Typography>
            <Typography sx={{ fontSize: '.75rem' }}>Following</Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          gridArea: 'sidebar',
        }}
      >
        <Typography>Favorites</Typography>
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
              <FavoriteCard />
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
              <UserProfileReviewCard />
            )
          })}
        </Box>
      </Box>
    </Container>
  )
};

export default UserProfile;