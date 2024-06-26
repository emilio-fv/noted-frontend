import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';

const UserCard = ({ maxWidth, user }) => {
  return (
    <Paper
      elevation={4}
      sx={{
        backgroundColor: 'background.card',
        paddingY: 2,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        maxWidth: maxWidth,
        textAlign: 'center'
      }}
    >
      <Link
        component={RouterLink}
        to={`/${user.username}/profile`}
      >
        <Box 
          component='img'
          sx={{
            width: '70%',
            height: 'auto',
            borderRadius: '50%'
          }}
          src={require('../../../assets/images/blank-profile.png')}
        />
        <Typography
          sx={{
            marginTop: 2,
          }}
        >
          {user.username}
        </Typography>
      </Link>
    </Paper>
  )
};

export default UserCard;