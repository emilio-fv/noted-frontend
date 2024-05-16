import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import UserReviewCard from '../../components/Cards/Dashboard/UserReview';
import LoggedInUserReviewCard from '../../components/Cards/Dashboard/LoggedInUserReview';
import { welcomeMessage } from '../../utils/welcomeMessage';
import { useOutletContext } from 'react-router-dom';
import { useGetReviewsByLoggedInUserQuery } from '../../services/reviews/reviewsService';
import CircularProgress from '@mui/material/CircularProgress';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { IconButton } from '@mui/material';

const itemsPerPage = 6;

const Dashboard = ({ loggedInUser }) => {
  // Handle logged in user reviews
  const { 
    data: loggedInUserReviews,
    isLoading: loggedInUserReviewsIsLoading,
    isError: loggedInUserReviewsIsError // TODO handle error state
  } = useGetReviewsByLoggedInUserQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  // Logged in user reviews agination features
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

  // Handle Logged in user reviews loading state
  if (loggedInUserReviewsIsLoading) {
    return <CircularProgress />
  }

  return (
    <>
      <Typography variant='h6'>
        {welcomeMessage()}, {loggedInUser?.username}!
      </Typography>
{/* 
      <Typography variant='subtitle1'>
        New from friends
      </Typography>
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
        {sampleReviews.map((item) => {
          return (
            <UserReviewCard />
          )
        })}
      </Box>
      <Typography variant='subtitle1'>
        Popular reviews
      </Typography>
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
        {sampleReviews.map((item) => {
          return (
            <UserReviewCard />
          )
        })}
      </Box>
*/}
      <Typography variant='subtitle1'>
        Your recent reviews
      </Typography>
      <Box
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
          <ArrowLeftIcon />
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
          disabled={currentLoggedInUserPage === totalLoggedInUserPages ? true : false}
        >
          <ArrowRightIcon />
        </IconButton>
      </Box>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    loggedInUser: state.auth.loggedInUser,
  }
};

export default connect(mapStateToProps)(Dashboard);