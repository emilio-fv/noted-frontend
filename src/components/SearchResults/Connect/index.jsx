import React from 'react';
import Box from '@mui/material/Box';
import UserCard from '../../Cards/User';
import { sampleUsers } from '../../../assets/data/constants';

const UserSearchResults = () => {
  return (
    <Box
      sx={{ 
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)', md: 'repeat(6, 1fr)' },
      }}
    >
      {sampleUsers.map((user) => {
        return (
          <Box
            sx={{
              paddingX: { xs: 12, sm: 3, md: 2 },
              paddingY: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <UserCard />
          </Box>
        )
      })}
    </Box>
  )
};

export default UserSearchResults;