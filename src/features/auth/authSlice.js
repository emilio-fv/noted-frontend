import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../../services/auth/authService";

const initialState = {
    isLoggedIn: false,
    loggedInUser: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder
            .addMatcher(authApi.endpoints.register.matchFulfilled, (state, action) => {
                const loggedInUser = action.payload
                state.isLoggedIn = true
                state.loggedInUser = loggedInUser
            })
            .addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
                const loggedInUser = action.payload
                state.isLoggedIn = true
                state.loggedInUser = loggedInUser
            })
            .addMatcher(authApi.endpoints.logout.matchFulfilled, (state) => {
                state.isLoggedIn = false
                state.loggedInUser = null
            })
    }
});

export const { 

 } = authSlice.actions;

export default authSlice.reducer;