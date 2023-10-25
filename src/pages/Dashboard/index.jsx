import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import UserReviewCard from '../../components/Cards/Dashboard/UserReview';
import LoggedInUserReviewCard from '../../components/Cards/Dashboard/LoggedInUserReview';
import { sampleReviews } from '../../assets/data/constants';
import { welcomeMessage } from '../../utils/welcomeMessage';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <>
      <Typography variant='h6'>
        {welcomeMessage()}, {user.username}!
      </Typography>
      {/* Reviews from friends */}
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
      {/* Popular reviews */}
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
      {/* Logged in user's reviews */}
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