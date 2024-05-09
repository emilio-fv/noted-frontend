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
import formatDuration from '../../../utils/formatDuration.js';
import { imagePlaceholderURL } from '../../../assets/data/constants.js';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';

const TracksTable = ({ tracks }) => {
  return (
    <TableContainer 
      component={Paper}
      sx={{
        backgroundColor: 'transparent',
      }}
      elevation={0}
    >
      <Table sx={{ tableLayout: 'fixed' }}>
        <TableHead>
          <TableRow>
            <TableCell width='40%' sx={{ textDecoration: 'underline', }} align='left'>
              Track Name
            </TableCell>
            <TableCell width='25%'  sx={{ textDecoration: 'underline',  }} align='left'>
              Album
            </TableCell>
            <TableCell width='25%'  sx={{ textDecoration: 'underline',  }} align='left' >
              Artist
            </TableCell>
            <TableCell width='10%' align='right'>
              <AccessTimeFilledIcon />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tracks.map((track) => {
            return (
                <TableRow
                sx={{ 
                  '&:last-child td, &:last-child th': { 
                    border: 0,
                  },
                }}
              >
                <TableCell
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 2,
                    overflow: 'hidden', 
                    whiteSpace: 'nowrap', 
                    textOverflow: 'ellipsis',
                  }}
                >
                  <Box
                    component='img'
                    sx={{
                      maxHeight: '25px',
                      height: '100%',
                      width: 'auto',
                      
                    }}
                    src={track.images.length === 0 ? imagePlaceholderURL : track.images[0].url}
                  />
                  {track.name}
                </TableCell>
                <TableCell 
                  sx={{ 
                    overflow: 'hidden', 
                    whiteSpace: 'nowrap', 
                    textOverflow: 'ellipsis',
                  }} 
                  align='left'
                >
                  <Link
                    // TODO link to album page
                    component={RouterLink}
                    to={null}
                  >
                    {track.album.name}
                  </Link>
                </TableCell>
                <TableCell 
                  sx={{ 
                    overflow: 'hidden', 
                    whiteSpace: 'nowrap', 
                    textOverflow: 'ellipsis',
                  }} 
                  align='left'
                >
                  <Link
                    // TODO link to artist page
                    component={RouterLink}
                    to={null}
                  >
                    {track.artist.name}
                  </Link>
                </TableCell>
                <TableCell 
                  align='right'
                >
                  {formatDuration(track.duration)}
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
};

export default TracksTable;