import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ArtistCard from '../../Cards/Music/Artist';
import AlbumCard from '../../Cards/Music/Album';
import TracksTable from '../../Tables/Tracks';
import { sampleAlbums, sampleArtists, sampleTracks } from '../../../assets/data/constants';

const MusicSearchResults = () => {
  return (
    <>
      <Typography variant='h6'>Artists</Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {sampleArtists.map((artist) => {
          return (
            <Box
              sx={{
                flex: { xs: '1 1 100%', sm: '1 1 32%', md: '1 1 12%'},
                paddingX: { xs: 12, sm: 3, md: 2 },
                paddingY: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <ArtistCard />
            </Box>
          )
        })}
      </Box>
      <Typography variant='h6'>Albums</Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {sampleAlbums.map((album) => {
          return (
            <Box
              sx={{
                flex: { xs: '1 1 100%', sm: '1 1 32%', md: '1 1 12%'},
                paddingX: { xs: 12, sm: 3, md: 2 },
                paddingY: 2,
                textAlign: 'center',
              }}
            >
              <AlbumCard />
            </Box>
          )
        })}
      </Box>
      <Typography variant='h6'>Tracks</Typography>
      <Box
        sx={{ 
          paddingX: 2
        }}
      >
        <TracksTable tracks={sampleTracks}/>
      </Box>
    </>
  )
};

export default MusicSearchResults;