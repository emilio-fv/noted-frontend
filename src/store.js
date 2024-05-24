import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { authApi } from './services/auth/authService';
import { musicApi } from './services/music/musicService';
import { reviewsApi } from './services/reviews/reviewsService';
import { connectApi } from './services/connect/connectService';
import authReducer from './features/auth/authSlice';
import musicReducer from './features/music/musicSlice';
import reviewsReducer from './features/reviews/reviewsSlice';
import connectReducer from './features/connect/connectSlice';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth'],
};

const combinedReducers = combineReducers({
    [authApi.reducerPath]: authApi.reducer,
    [musicApi.reducerPath]: musicApi.reducer,
    [reviewsApi.reducerPath]: reviewsApi.reducer,
    [connectApi.reducerPath]: connectApi.reducer,
    auth: authReducer,
    music: musicReducer,
    reviews: reviewsReducer,
    connect: connectReducer,
})

const persistedReducer = persistReducer(persistConfig, combinedReducers);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV === 'development',
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
              },
        }).concat(
            authApi.middleware, 
            musicApi.middleware,
            reviewsApi.middleware,
            connectApi.middleware,
        )
});

export const persistor = persistStore(store);