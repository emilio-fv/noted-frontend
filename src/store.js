import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './services/auth/authService';
import { musicApi } from './services/music/musicService';
import { reviewsApi } from './services/reviews/reviewsService';
import authReducer from './features/auth/authSlice';
import musicReducer from './features/music/musicSlice';

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        auth: authReducer,
        // [musicApi.reducerPath]: musicApi.reducer,
        // music: musicReducer,
        // [reviewsApi.reducerPath]: reviewsApi.reducer,
    },
    devTools: process.env.NODE_ENV === 'development',
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(
            authApi.middleware, 
            // musicApi.middleware,
        )
});