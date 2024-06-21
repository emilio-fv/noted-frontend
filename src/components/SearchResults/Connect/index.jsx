import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import UserCard from '../../Cards/User';
import { connect } from 'react-redux';
import { clearQueryUsersResults } from '../../../features/connect/connectSlice';
import LoadingScreen from '../../LoadingScreen';

const UserSearchResults = ({ queryUsersResults, clearQueryUsersResults, queryState }) => {
  useEffect(() => {
    return () => {
      clearQueryUsersResults();
    }
  }, []);

  if (queryState === 'idle') {
    return null;
  }

  if (queryState === 'pending') {
    return <LoadingScreen />
  }

  return (
    <Box
      sx={{ 
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)', md: 'repeat(6, 1fr)' },
      }}
    >
      {queryUsersResults?.map((user) => {
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
            <UserCard user={user}/>
          </Box>
        )
      })}
    </Box>
  )
};

const mapStateToProps = (state) => {
  return {
    queryUsersResults: state.connect.queryUsersResults,
    queryState: state.connect.queryState,
  }
};

const mapDispatchToProps = {
  clearQueryUsersResults
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSearchResults);