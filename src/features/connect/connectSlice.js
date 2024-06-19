import { createSlice } from "@reduxjs/toolkit";
import { connectApi } from "../../services/connect/connectService";

const initialState = {
    queryUsersResults: null,
    currentQuery: null,
    queryState: 'idle',
};

export const connectSlice = createSlice({
    name: 'connect',
    initialState,
    reducers: {
        clearQueryUsersResults: (state) => {
            state.queryUsersResults = null
            state.queryState = 'idle'
        }
    },
    extraReducers: builder => {
        builder
            .addMatcher(connectApi.endpoints.queryUsers.matchPending, (state) => {
                state.queryState = 'pending'
            })
            .addMatcher(connectApi.endpoints.queryUsers.matchFulfilled, (state, action) => {
                state.queryUsersResults = action.payload.results
                state.currentQuery = action.payload.currentQuery
                state.queryState = 'fulfilled'
            })
    }
})

export const {
    clearQueryUsersResults
} = connectSlice.actions;

export default connectSlice.reducer;