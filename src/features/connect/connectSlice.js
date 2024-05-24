import { createSlice } from "@reduxjs/toolkit";
import { connectApi } from "../../services/connect/connectService";

const initialState = {
    queryUsersResults: null,
    currentQuery: null,
};

export const connectSlice = createSlice({
    name: 'connect',
    initialState,
    reducers: {
        clearQueryUsersResults: (state) => {
            state.queryUsersResults = null
        }
    },
    extraReducers: builder => {
        builder
            .addMatcher(connectApi.endpoints.queryUsers.matchFulfilled, (state, action) => {
                console.log(action.payload);
                state.queryUsersResults = action.payload.results
                state.currentQuery = action.payload.currentQuery
            })
    }
})

export const {
    clearQueryUsersResults
} = connectSlice.actions;

export default connectSlice.reducer;