import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import UserReviewCard from '../../components/Cards/Dashboard/UserReview';
import LoggedInUserReviewCard from '../../components/Cards/Dashboard/LoggedInUserReview';
import { welcomeMessage } from '../../utils/welcomeMessage';
import { useOutletContext } from 'react-router-dom';

const Dashboard = ({ loggedInUser }) => {
  // TODO: get user data
  // TODO: get reviews from friends
  // TODO: get popular reviews
  // TODO: get user's reviews

  return (
    <>
      <Typography variant='h6'>
        {welcomeMessage()}, {loggedInUser?.username}!
      </Typography>

      {/* <Typography variant='subtitle1'>
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

      <Typography variant='subtitle1'>
        Your recent reviews
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
            <LoggedInUserReviewCard />
          )
        })}
      </Box> */}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    loggedInUser: state.auth.loggedInUser,
  }
};

export default connect(mapStateToProps)(Dashboard);