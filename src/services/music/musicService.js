import { createApi } from '@reduxjs/toolkit/query/react';
import { reauthBaseQuery } from '../config';

export const musicApi = createApi({
    reducerPath: 'musicApi',
    baseQuery: reauthBaseQuery,
    endpoints: builder => ({
        getSpotifyAccessToken: builder.query({
            query: () => ({
                url: '/music/getSpotifyAccessToken',
                method: 'GET',
            })
        }),
        getFeaturedAlbums: builder.query({
            query: () => ({
                url: '/music/getFeaturedAlbums',
                method: 'GET'
            }),
            transformResponse: (response, meta, arg) => {
                // TODO: parse through album data to extract necessary data
                return response;
            }
        }),
        // searchSpotify: builder.query({
        //     query: data => ({
        //         url: '/music/search',
        //         method: 'GET',
        //         body: data,
        //     })
        // }),
        // getArtistData: builder.query({
        //     query: artistId => ({
        //         url: `/music/${artistId}/artist`,
        //         method: 'GET',
        //         body: data,
        //     })
        // }),
        // getAlbumData: builder.query({
        //     query: albumId => ({
        //         url: `/music/${albumId}/album`,
        //         method: 'GET',
        //         body: data,
        //     })
        // })
    })
});

export const {
    useGetSpotifyAccessTokenQuery,
    useGetFeaturedAlbumsQuery,
    // useRequestSpotifyTokenQuery,
    // useSearchSpotifyQuery,
    // useGetArtistDataQuery,
    // useGetAlbumDataQuery
} = musicApi;