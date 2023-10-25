import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    user: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        register: (state) => {
            state.isLoggedIn = true;
            state.user = {
                firstName: 'John',
                lastName: 'Smith',
                username: 'johnSmith7',
                email: 'john@smith.com'
            }
        },
        login: (state) => {
            state.isLoggedIn = true;
            state.user = {
                firstName: 'John',
                lastName: 'Smith',
                username: 'johnSmith7',
                email: 'john@smith.com'
            }
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.user = null;
        },
    },
});

export const { register, login, logout } = authSlice.actions;

export default authSlice.reducer;