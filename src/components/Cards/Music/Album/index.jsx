import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { imagePlaceholderURL } from '../../../../assets/data/constants';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';

const AlbumCard = ({ album, profileCard=false }) => {
  return (
      <Paper
        elevation={4}
        sx={{
          backgroundColor: 'background.card',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          maxWidth: '300px',
          textAlign: 'center'
        }}
      >
        <Link
          component={RouterLink}
          to={`/${album.id}/album`}
        >    
            <Box 
              component={'img'}
              sx={{
                width: '100%',
                maxHeight: { xs: '200px', sm: '200px', md: '120px' },
                objectFit: 'cover',
              }}
              src={album.images.length === 0 ? imagePlaceholderURL : album.images[1].url}
            />
        </Link>
        <Box
          sx={{
            marginY: 2,
            paddingX: 2,
          }}
        >
          <Link
            component={RouterLink}
            to={`/${album.id}/album`}
          >
            <Typography 
              noWrap
              sx={{ 
                fontStyle: 'italic',
              }}
              >
              {album.name}
            </Typography>
          </Link>
          {profileCard
            ? 
              <Link
                component={RouterLink}
                to={`/${album.artist?.id}/artist`}
              >    
                <Typography
                  noWrap
                  sx={{
                    fontSize: { md: '.75rem'},
                  }}
                >
                  {album.artist?.name}
                </Typography>
              </Link>
            : null
          }
        </Box>
      </Paper>
    
  )
};

export default AlbumCard;