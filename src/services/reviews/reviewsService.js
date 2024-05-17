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
            }),
            invalidatesTags: ['albumReviews', 'loggedInUserReviews']
        }),
        getReviewsByLoggedInUser: builder.query({
            query: () => ({
                url: '/reviews/loggedInUser',
                method: 'GET'
            }),
            transformResponse: (response, meta, arg) => {
                return response.reviewsData
            },
            providesTags: ['loggedInUserReviews']
        }),
        getReviewsByAlbum: builder.query({
            query: (albumId) => ({
                url: `/reviews/${albumId}/album`,
                method: 'GET'
            }),
            transformResponse: (response, meta, arg) => {
                return response.reviewsData
            },
            providesTags: ['albumReviews']
        }),
        updateReview: builder.mutation({
            query: (data) => ({
                url: `/reviews/${data.reviewId}/update`,
                method: 'PUT',
                body: data.reviewData,
            }),
            invalidatesTags: ['loggedInUserReviews', 'albumReviews']
        }),
        deleteReview: builder.mutation({
            query: (reviewId) => ({
                url: `/reviews/${reviewId}/delete`,
                method: 'DELETE',
            }),
            invalidatesTags: ['loggedInUserReviews', 'albumReviews']
        }),

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
    useGetReviewsByAlbumQuery,
    useUpdateReviewMutation,
    useDeleteReviewMutation,
} = reviewsApi;