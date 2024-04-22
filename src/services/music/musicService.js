import { createApi } from '@reduxjs/toolkit/query/react';
import { reauthBaseQuery } from '../config';

export const musicApi = createApi({
    reducerPath: 'musicApi',
    baseQuery: reauthBaseQuery,
    endpoints: builder => ({
        getFeaturedAlbums: builder.query({
            query: () => ({
                url: '/music/getFeaturedAlbums',
                method: 'GET'
            }),
            transformResponse: (response, meta, arg) => {
                const featuredAlbums = response.featuredAlbums.albums.items;
                return featuredAlbums;
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
    useGetFeaturedAlbumsQuery,
    // useRequestSpotifyTokenQuery,
    // useSearchSpotifyQuery,
    // useGetArtistDataQuery,
    // useGetAlbumDataQuery
} = musicApi;