import { createApi } from '@reduxjs/toolkit/query/react';
import { reauthBaseQuery } from '../config';

export const musicApi = createApi({
    reducerPath: 'musicApi',
    baseQuery: reauthBaseQuery,
    endpoints: builder => ({
        requestSpotifyToken: builder.query({
            query: () => ({
                url: '/music/requestToken',
                method: 'GET',
            })
        }),
        getNewReleases: builder.query({
            query: () => ({
                url: '/music/newReleases',
                method: 'GET'
            })
        }),
        searchSpotify: builder.query({
            query: data => ({
                url: '/music/search',
                method: 'GET',
                body: data,
            })
        }),
        getArtistData: builder.query({
            query: artistId => ({
                url: `/music/${artistId}/artist`,
                method: 'GET',
                body: data,
            })
        }),
        getAlbumData: builder.query({
            query: albumId => ({
                url: `/music/${albumId}/album`,
                method: 'GET',
                body: data,
            })
        })
    })
});

export const {
    useRequestSpotifyTokenQuery,
    useSearchSpotifyQuery,
    useGetArtistDataQuery,
    useGetAlbumDataQuery
} = musicApi;