import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

const TracksTable = ({ tracks }) => {
  return (
    <TableContainer 
      component={Paper}
      sx={{
        backgroundColor: 'transparent'
      }}
      elevation={0}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ textDecoration: 'underline' }} align='left' >Track</TableCell>
            <TableCell sx={{ textDecoration: 'underline' }} align='left' >Album</TableCell>
            <TableCell sx={{ textDecoration: 'underline' }} align='left' >Artist</TableCell>
            <TableCell align='right' ><AccessTimeFilledIcon /></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tracks.map((track) => {
            return (
                <TableRow
                sx={{ 
                  '&:last-child td, &:last-child th': { 
                    border: 0 
                  },
                }}
              >
                <TableCell
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 2
                  }}
                >
                  <Box
                    component='img'
                    sx={{
                      maxHeight: '25px',
                      height: '100%',
                      width: 'auto'
                    }}
                    src={require('../../../assets/data/constants')}
                  />
                  Track Name
                </TableCell>
                <TableCell align='left'>Album Name</TableCell>
                <TableCell align='left'>Artist Name</TableCell>
                <TableCell align='right'>Duration</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
};

export default TracksTable;