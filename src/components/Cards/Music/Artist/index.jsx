import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { imagePlaceholderURL } from '../../../../assets/data/constants';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';

const ArtistCard = ({ artist }) => {
  return (
    <Link
      // TODO link to artist page
      component={RouterLink}
      to={null}
    >    
      <Paper
        elevation={4}
        sx={{
          backgroundColor: 'background.card',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textAlign: 'center',
          maxHeight: '300px',
        }}
      >
        <Box
          component={'img'}
          sx={{
            width: '100%',
            maxHeight: { xs: '200px', sm: '200px', md: '120px' },
            objectFit: 'cover',
          }}
          src={artist.images.length === 0 ? imagePlaceholderURL : artist.images[1].url}
        />
        <Typography
          sx={{
            marginY: 2,
            paddingX: 2,
          }}
          noWrap
        >
          {artist.name}
        </Typography>
      </Paper>
    </Link>
  )
};

export default ArtistCard;