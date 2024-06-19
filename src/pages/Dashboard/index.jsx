import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import UserReviewCard from '../../components/Cards/Dashboard/UserReview';
import LoggedInUserReviewCard from '../../components/Cards/Dashboard/LoggedInUserReview';
import { welcomeMessage } from '../../utils/welcomeMessage';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { useGetReviewsByFollowingUsersQuery, useGetReviewsByLoggedInUserQuery } from '../../services/reviews/reviewsService';
import CircularProgress from '@mui/material/CircularProgress';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { IconButton } from '@mui/material';
import ActionButton from '../../components/Buttons/Action';

const itemsPerPage = 6;

const Dashboard = ({ loggedInUser }) => {
  // Helpers
  const navigate = useNavigate();

  // Handle following users reviews
  const {
    data: followingUsersReviews,
    isLoading: followingUsersReviewsIsLoading,
    isError: followingUsersReviewsIsError, // TODO handle errors
  } = useGetReviewsByFollowingUsersQuery(undefined, {
    refetchOnMountOrArgChange: true,
  })

  // Handle logged in user reviews
  const { 
    data: loggedInUserReviews,
    isLoading: loggedInUserReviewsIsLoading,
    isError: loggedInUserReviewsIsError // TODO handle errors
  } = useGetReviewsByLoggedInUserQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  // Following users reviews pagination features
  const [currentFollowingUsersReviewsPage, setCurrentFollowingUsersReviewsPage] = useState(0);
  const totalFollowingUsersReviewsPages = Math.ceil(followingUsersReviews?.length / itemsPerPage);
  const currentFollowingUsersReviews = followingUsersReviews?.slice(
    currentFollowingUsersReviewsPage * itemsPerPage,
    currentFollowingUsersReviewsPage * itemsPerPage + itemsPerPage
  );

  const handleFollowingUsersReviewsNext = () => {
    if (currentFollowingUsersReviewsPage < totalFollowingUsersReviewsPages - 1) {
      setCurrentFollowingUsersReviewsPage((prevPage) => prevPage + 1);
    }
  };

  const handleFollowingUsersReviewsPrevious = () => {
    if (currentFollowingUsersReviewsPage > 0) {
      setCurrentFollowingUsersReviewsPage((prevPage) => prevPage - 1);
    }
  };

  // Logged in user reviews pagination features
  const [currentLoggedInUserPage, setCurrentLoggedInUserPage] = useState(0);
  const totalLoggedInUserPages = Math.ceil(loggedInUserReviews?.length / itemsPerPage);
  const currentLoggedInUserReviews = loggedInUserReviews?.slice(
    currentLoggedInUserPage * itemsPerPage,
    currentLoggedInUserPage * itemsPerPage + itemsPerPage
  );

  const handleLoggedInUserNext = () => {
    if (currentLoggedInUserPage < totalLoggedInUserPages - 1) {
      setCurrentLoggedInUserPage((prevPage) => prevPage + 1);
    }
  };

  const handleLoggedInUserPrevious = () => {
    if (currentLoggedInUserPage > 0) {
      setCurrentLoggedInUserPage((prevPage) => prevPage - 1);
    }
  };

  // Handle 'search for music to review' button 
  const handleSearchMusicButtonClick = () => {
    navigate('/music');
  };

  // Handle 'search users to follow' button
  const handleSearchUsersButtonClick = () => {
    navigate('/connect');
  };

  // Handle Logged in user reviews loading state
  if (loggedInUserReviewsIsLoading || followingUsersReviewsIsLoading) {
    return <CircularProgress />
  }

  return (
    <>
      <Typography variant='h5'>
        {welcomeMessage()}, {loggedInUser?.username}!
      </Typography>
      {/* ===== Following Users Recent Reviews ====== */}
      <Typography variant='h6'>
        New from friends
      </Typography>
      {followingUsersReviews.length === 0
        ? <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 2,
              paddingY: 6,
            }}
          >
            <Typography>No reviews yet!</Typography>
            <ActionButton 
              sx={{
                fontSize: '.8rem',
                textTransform: 'none',
              }}
              text={'Search Users'}
              handleClick={handleSearchUsersButtonClick}
            />
          </Box>
        : <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <IconButton
              sx={{
                color: 'white'
              }}
              onClick={handleFollowingUsersReviewsPrevious}
              disabled={currentFollowingUsersReviewsPage > 0 ? false : true}
            >
              <ArrowLeftIcon sx={{ color: currentFollowingUsersReviewsPage > 0 ? 'white' : 'transparent' }} />
            </IconButton>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { 
                  xs: '1fr', 
                  sm: 'repeat(3, 1fr)', 
                  md: 'repeat(6, 1fr)' 
                } 
              }}
            >
              {currentFollowingUsersReviews.map((review, index) => {
                return (
                  <UserReviewCard key={index} review={review}/>
                )
              })}
            </Box>
            <IconButton
              sx={{
                color: 'white'
              }}
              onClick={handleFollowingUsersReviewsNext}
              disabled={followingUsersReviews.length > 6 && currentFollowingUsersReviewsPage !== totalFollowingUsersReviewsPages - 1 ? false : true}
            >
              <ArrowRightIcon sx={{ color: followingUsersReviews.length > 6 && currentFollowingUsersReviewsPage !== totalFollowingUsersReviewsPages - 1 ? 'white' : 'transparent' }}/>
            </IconButton>
          </Box>
      }
      {/* ===== Logged In User Recent Reviews ====== */}
      <Typography variant='h6'>
        Your recent reviews
      </Typography>
      {loggedInUserReviews.length === 0
        ? <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 2,
              paddingY: 6,
            }}
          >
            <Typography>No reviews yet!</Typography>
            <ActionButton 
              sx={{
                fontSize: '.8rem',
                textTransform: 'none'
              }}
              text={'Search Music'}
              handleClick={handleSearchMusicButtonClick}
            />
          </Box>
        : <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <IconButton 
              sx={{
                color: 'white'
              }}
              onClick={handleLoggedInUserPrevious}
              disabled={currentLoggedInUserPage > 0 ? false : true}
            >
              <ArrowLeftIcon sx={{ color: currentLoggedInUserPage > 0 ? 'white' : 'transparent' }}/>
            </IconButton>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { 
                  xs: '1fr', 
                  sm: 'repeat(3, 1fr)', 
                  md: 'repeat(6, 1fr)' 
                }
              }}
            >
              {currentLoggedInUserReviews.map((review, index) => {
                return (
                  <LoggedInUserReviewCard key={index} review={review}/>
                )
              })}
            </Box> 
            <IconButton 
              sx={{
                color: 'white'
              }}
              onClick={handleLoggedInUserNext} 
              disabled={loggedInUserReviews.length > 6 && currentLoggedInUserPage !== totalLoggedInUserPages - 1 ? false : true}
            >
              <ArrowRightIcon sx={{ color: loggedInUserReviews.length > 6 && currentLoggedInUserPage !== totalLoggedInUserPages - 1 ? 'white' : 'transparent'}}/>
            </IconButton>
          </Box>
      }
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    loggedInUser: state.auth.loggedInUser,
  }
};

export default connect(mapStateToProps)(Dashboard);