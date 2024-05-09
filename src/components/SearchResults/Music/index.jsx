import React, { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ArtistCard from '../../Cards/Music/Artist';
import AlbumCard from '../../Cards/Music/Album';
import TracksTable from '../../Tables/Tracks';
import { connect } from 'react-redux';
import { clearQuerySpotifyResults } from '../../../features/music/musicSlice';
import ActionButton from '../../Buttons/Action';
import { spotifyQueryLimit } from '../../../assets/data/constants';
import { useGetMoreArtistsMutation, useGetMoreAlbumsMutation, useGetMoreTracksMutation } from '../../../services/music/musicService';
import { Grid } from '@mui/material';
import CardLink from '../../Links/Card';

const MusicSearchResults = ({ querySpotifyResults, clearQuerySpotifyResults, offsets, currentQuery }) => {
  const [ getMoreArtists ] = useGetMoreArtistsMutation();
  const [ getMoreAlbums ] = useGetMoreAlbumsMutation();
  const [ getMoreTracks ] = useGetMoreTracksMutation();

  useEffect(() => {
    return () => {
      clearQuerySpotifyResults();
    }
  }, []);

  if (!querySpotifyResults) {
    return null;
  }

  const handleLoadMoreArtistsClick = (event) => {
    event.preventDefault();
    getMoreArtists({
      currentQuery: currentQuery,
      offset: Number(offsets?.artists) + spotifyQueryLimit,
    });
  }

  const handleLoadMoreAlbumsClick = (event) => {
    event.preventDefault();
    getMoreAlbums({
      currentQuery: currentQuery,
      offset: Number(offsets?.albums) + spotifyQueryLimit,
    });
  }

  const handleLoadMoreTracksClick = (event) => {
    event.preventDefault();
    getMoreTracks({
      currentQuery: currentQuery,
      offset: Number(offsets?.tracks) + spotifyQueryLimit,
    });
  }


  return (
    <>
      {/* ======== ARTISTS ======== */}
      <Typography variant='h5' marginBottom={1}>Artists</Typography>
      <Grid 
        container 
        spacing={2} 
        sx={{ paddingX: { xs: 6, sm: 0 }, }}
      >
        {querySpotifyResults.artists.map((artist, key) => {
          return (
            <Grid item xs={12} sm={6} md={2} key={key} zeroMinWidth maxHeight={'300px'}>
              <CardLink path={null} >
                <ArtistCard artist={artist}/>
              </CardLink>
            </Grid>
          )
        })}
      </Grid>
      <Box
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        <ActionButton sx={{ marginTop: 4, marginBottom: 2 }} text={'Load more'} handleClick={handleLoadMoreArtistsClick}/>
      </Box>
      {/* ======== ALBUMS ======== */}
      <Typography variant='h5' marginBottom={1}>Albums</Typography>
      <Grid
        container
        spacing={2}
        sx={{
          paddingX: { xs: 6, sm: 0 },
        }}
      >
        {querySpotifyResults.albums.map((album, key) => {
          return (
            <Grid item xs={12} sm={6} md={2} key={key} maxHeight={'300px'}>
              <AlbumCard album={album} profileCard={true}/>
            </Grid>
          )
        })}
      </Grid>
      <Box
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        <ActionButton sx={{ marginTop: 4, marginBottom: 2, }} text={'Load more'} handleClick={handleLoadMoreAlbumsClick}/>
      </Box>
      {/* ======== TRACKS ======== */}
      <Typography variant='h5'>Tracks</Typography>
      <Box
        sx={{ 
          paddingX: 2,
          paddingY: 2,
          gap: 2,
          flexDirection: 'column',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        <TracksTable tracks={querySpotifyResults.tracks}/>
        <ActionButton text={'Load more'} handleClick={handleLoadMoreTracksClick}/>
      </Box>
    </>
  )
};

const mapStateToProps = (state) => {
  return {
    querySpotifyResults: state.music.querySpotifyResults,
    offsets: state.music.offsets,
    currentQuery: state.music.currentQuery,
  }
};

const mapDispatchToProps = {
  clearQuerySpotifyResults
};

export default connect(mapStateToProps, mapDispatchToProps)(MusicSearchResults);