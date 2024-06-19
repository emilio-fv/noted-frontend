import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ActionButton from '../../components/Buttons/Action';
import FavoriteCard from '../../components/Cards/Favorite';
import UserProfileReviewCard from '../../components/Cards/Reviews/UserProfile';
import { useFollowUserMutation, useGetUsersProfileDataQuery, useUnfollowUserMutation } from '../../services/connect/connectService';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { useGetReviewsByUsernameQuery } from '../../services/reviews/reviewsService';
import LoadingScreen from '../../components/LoadingScreen';

const UserProfile = ({ loggedInUser }) => {
  const currentYear = String(new Date().getFullYear());
  const { username } = useParams();
  const { data: user, isLoading: userIsLoading, isSuccess: userIsSuccess } = useGetUsersProfileDataQuery(username, { refetchOnMountOrArgChange: true });
  const { data: reviews, isLoading: reviewsIsLoading } = useGetReviewsByUsernameQuery(username, { refetchOnMountOrArgChange: true });
  const [ followUser ] = useFollowUserMutation();
  const [ unfollowUser ] = useUnfollowUserMutation();
  const [followingStatus, setFollowingStatus] = useState(false);

  useEffect(() => {
    if (userIsSuccess) {
      setFollowingStatus(user?.followers?.includes(loggedInUser._id));
    }
  }, [userIsSuccess]);

  const handleFollowButtonClick = () => {
    if (followingStatus) {
      unfollowUser(user._id);
      setFollowingStatus(false);
    } else {
      followUser(user._id);
      setFollowingStatus(true);
    }
  };

  if (userIsLoading || reviewsIsLoading) {
    return <LoadingScreen />
  }

  // TODO handle errors

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
              {user?.username}
            </Typography>
            <Typography
              sx={{
                fontSize: '.75rem'
              }}
            >
              Joined {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short' }).format(new Date(user?.createdAt))}
            </Typography>
            {loggedInUser?._id !== user?._id
              ? <ActionButton 
                handleClick={handleFollowButtonClick}
                sx={{
                  maxWidth: '20%',
                  fontSize: '.6rem',
                  maxHeight: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  marginLeft: 2,
                }}
                text={ followingStatus ? 'Unfollow' : 'Follow' }
              />
              : null
            }
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
            <Typography sx={{ fontSize: '.75rem' }}>
              {user?.reviewStats.lifetime}
            </Typography>
            <Typography sx={{ fontSize: '.75rem' }}>
              Reviews
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Typography sx={{ fontSize: '.75rem' }}>
              {user.reviewStats.byYear.hasOwnProperty(currentYear) ? user.reviewStats.byYear[currentYear] : 0}
            </Typography>
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
            <Typography sx={{ fontSize: '.75rem' }}>
              {user?.followers.length}
            </Typography>
            <Typography sx={{ fontSize: '.75rem' }}>
              Followers
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Typography sx={{ fontSize: '.75rem' }}>
              {user?.following.length}
            </Typography>
            <Typography sx={{ fontSize: '.75rem' }}>
              Following
            </Typography>
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
          {user?.favorites?.map((favorite) => {
            return (
              <FavoriteCard favorite={favorite}/>
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
          {reviews.map((review) => {
            return (
              <UserProfileReviewCard review={review} isAuthor={loggedInUser._id === review.author.userId}/>
            )
          })}
        </Box>
      </Box>
    </Container>
  )
};

const mapStateToProps = (state) => {
  return {
    loggedInUser: state.auth.loggedInUser,
  }
};

export default connect(mapStateToProps)(UserProfile);