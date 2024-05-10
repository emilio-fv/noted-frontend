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
        querySpotify: builder.mutation({
            query: data => ({
                url: '/music/querySpotify',
                method: 'GET',
                params: {
                    spotifyQuery: data.spotifyQuery,
                    offset: data.offset,
                }
            }),
            transformResponse: (response, meta, arg) => {
                return response;
            }
        }),
        getMoreArtists: builder.mutation({
            query: data => ({
                url: '/music/querySpotify',
                method: 'GET',
                params: {
                    spotifyQuery: data.currentQuery,
                    offset: data.offset,
                    type: 'artist',
                }
            }),
            transformResponse: (response, meta, arg) => {
                return response;
            }
        }),
        getMoreAlbums: builder.mutation({
            query: data => ({
                url: '/music/querySpotify',
                method: 'GET',
                params: {
                    spotifyQuery: data.currentQuery,
                    offset: data.offset,
                    type: 'album',
                }
            }),
            transformResponse: (response, meta, arg) => {
                return response;
            }
        }),
        getMoreTracks: builder.mutation({
            query: data => ({
                url: '/music/querySpotify',
                method: 'GET',
                params: {
                    spotifyQuery: data.currentQuery,
                    offset: data.offset,
                    type: 'track',
                }
            }),
            transformResponse: (response, meta, arg) => {
                return response;
            }
        }),
        getArtistsData: builder.query({
            query: artistId => ({
                url: `/music/${artistId}/getArtistsData`,
                method: 'GET'
            }),
            transformResponse: (response, meta, arg) => {
                return response.artistData;
            }
        }),
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
    useQuerySpotifyMutation,
    useGetMoreArtistsMutation,
    useGetMoreAlbumsMutation,
    useGetMoreTracksMutation,
    useGetArtistsDataQuery
} = musicApi;