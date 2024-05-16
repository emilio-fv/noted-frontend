import { createApi } from '@reduxjs/toolkit/query/react';
import { reauthBaseQuery } from '../config';

export const reviewsApi = createApi({
    reducerPath: 'reviewsApi',
    baseQuery: reauthBaseQuery,
    endpoints: builder => ({
        createReview: builder.mutation({
            query: (data) => ({
                url: '/reviews/createReview',
                method: 'POST',
                body: data,
            })
        }),
        // editReview: builder.mutation({
        //     query: (data) => ({
        //         url: `/reviews/${data.id}/edit`,
        //         method: 'PUT',
        //         body: data,
        //     })
        // }),
        // deleteReview: builder.mutation({
        //     query: (reviewId) => ({
        //         url: `/reviews/${reviewId}/delete`,
        //         method: 'DELETE',
        //     })
        // }),
        // getReviewsByFriends: builder.query({
        //     query: () => ({
        //         url: '/reviews/byFriends',
        //         method: 'GET'
        //     })
        // }),
        // getPopularReviews: builder.query({
        //     query: () => ({
        //         url: '/reviews/popularReviews',
        //         method: 'GET'
        //     })
        // }),
        getReviewsByLoggedInUser: builder.query({
            query: () => ({
                url: '/reviews/loggedInUser',
                method: 'GET'
            }),
            transformResponse: (response, meta, arg) => {
                return response.reviewsData;
            }
        }),
        // getReviewsByAlbum: builder.query({
        //     query: (albumId) => ({
        //         url: `/reviews/${albumId}/byAlbum`,
        //         method: 'GET'
        //     })
        // }),
        // getReviewsByArtist: builder.query({
        //     query: (artistId) => ({
        //         url: `/reviews/${artistId}/byArtist`,
        //         method: 'GET'
        //     })
        // }),
        // getReviewsByUsername: builder.query({
        //     query: (username) => ({
        //         url: `/reviews/${username}/byUsername`,
        //         method: 'GET'
        //     })
        // })
    })
});

export const {
    useCreateReviewMutation,
    useGetReviewsByLoggedInUserQuery,
} = reviewsApi;