import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import UserReviewCard from '../../components/Cards/Dashboard/UserReview';
import LoggedInUserReviewCard from '../../components/Cards/Dashboard/LoggedInUserReview';
import { sampleReviews } from '../../assets/data/constants';
import { welcomeMessage } from '../../utils/welcomeMessage';

const user = {
  username: 'milz6525',
  firstName: 'Emilio',
  lastName: 'Vazquez',
}

const Dashboard = () => {
  // TODO: get user data
  // TODO: get reviews from friends
  // TODO: get popular reviews
  // TODO: get user's reviews

  return (
    <>
      <Typography variant='h6'>
        {welcomeMessage()}, {user.username}!
      </Typography>
      {/* Reviews From Friends */}
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
      {/* Popular Reviews */}
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
      {/* Users Reviews */}
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
      </Box>
    </>
  )
}

export default Dashboard;