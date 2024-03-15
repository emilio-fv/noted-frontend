import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { authApi } from './services/auth/authService';
import { musicApi } from './services/music/musicService';
import { reviewsApi } from './services/reviews/reviewsService';
import authReducer from './features/auth/authSlice';
import musicReducer from './features/music/musicSlice';
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
    auth: authReducer,
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
            // musicApi.middleware,
        )
});

export const persistor = persistStore(store);