import { createSlice } from "@reduxjs/toolkit"
import { musicApi } from "../../services/music/musicService";

const initialState = {
    querySpotifyResults: null,
    offsets: null,
    currentQuery: null,
}

export const musicSlice = createSlice({
    name: 'music',
    initialState, 
    reducers: {
        clearQuerySpotifyResults: (state) => {
            state.querySpotifyResults = null;
        }
    },
    extraReducers: builder => {
        builder
            .addMatcher(musicApi.endpoints.querySpotify.matchFulfilled, (state, action) => {
                state.querySpotifyResults = action.payload.results
                state.offsets = {
                    artists: 0,
                    albums: 0,
                    tracks: 0,
                }
                state.currentQuery = action.payload.currentQuery
            })
            .addMatcher(musicApi.endpoints.getMoreArtists.matchFulfilled, (state, action) => {
                state.querySpotifyResults.artists = state.querySpotifyResults.artists.concat(action.payload.results.artists)
                state.offsets = {
                    ...state.offsets,
                    artists: Number(action.payload.offset)
                }
                state.currentQuery = action.payload.currentQuery
            })
            .addMatcher(musicApi.endpoints.getMoreAlbums.matchFulfilled, (state, action) => {
                state.querySpotifyResults.albums = state.querySpotifyResults.albums.concat(action.payload.results.albums) 
                state.offsets = {
                    ...state.offsets,
                    albums: Number(action.payload.offset)
                }
                state.currentQuery = action.payload.currentQuery
            })
            .addMatcher(musicApi.endpoints.getMoreTracks.matchFulfilled, (state, action) => {
                state.querySpotifyResults.tracks = state.querySpotifyResults.tracks.concat(action.payload.results.tracks)
                state.offsets = {
                    ...state.offsets,
                    tracks: Number(action.payload.offset)
                }
                state.currentQuery = action.payload.currentQuery
            })
    }
});

export const { 
    clearQuerySpotifyResults
 } = musicSlice.actions;

export default musicSlice.reducer;