import { createSlice } from "@reduxjs/toolkit"
import { musicApi } from "../../services/music/musicService";

const initialState = {
    accessToken: null,
}

export const musicSlice = createSlice({
    name: 'music',
    initialState, 
    reducers: {},
    // extraReducers: builder =>{
    //     builder
    //         .addMatcher(musicApi.endpoints.getFeaturedAlbums.)
    // }
});

export const {  } = musicSlice.actions;

export default musicSlice.reducer;