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
            invalidatesTags: ['albumReviews', 'loggedInUserReviews', 'artistReviews', 'followingUsersReviews']
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
        getReviewsByFollowingUsers: builder.query({
            query: () => ({
                url: `/reviews/following`,
                method: 'GET'
            }),
            transformResponse: (response, meta, arg) => {
                return response.reviewsData
            },
            providesTags: ['followingUsersReviews']
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
        getReviewsByArtist: builder.query({
            query: (artistId) => ({
                url: `/reviews/${artistId}/artist`,
                method: 'GET'
            }),
            transformResponse: (response, meta, arg) => {
                return response.reviewsData
            },
            providesTags: ['artistReviews']
        }),
        getReviewsByUsername: builder.query({
            query: (username) => ({
                url: `/reviews/${username}/profile`,
                method: 'GET'
            }),
            transformResponse: (response, meta, arg) => {
                return response.results
            },
            providesTags: ['profileReviews']
        }),
        updateReview: builder.mutation({
            query: (data) => ({
                url: `/reviews/${data.reviewId}/update`,
                method: 'PUT',
                body: data.reviewData,
            }),
            invalidatesTags: ['loggedInUserReviews', 'albumReviews', 'artistReviews', 'followingUsersReviews']
        }),
        deleteReview: builder.mutation({
            query: (reviewId) => ({
                url: `/reviews/${reviewId}/delete`,
                method: 'DELETE',
            }),
            invalidatesTags: ['loggedInUserReviews', 'albumReviews', 'artistReviews', 'followingUsersReviews']
        }),
    })
});

export const {
    useCreateReviewMutation,
    useGetReviewsByLoggedInUserQuery,
    useGetReviewsByFollowingUsersQuery,
    useGetReviewsByAlbumQuery,
    useGetReviewsByArtistQuery,
    useGetReviewsByUsernameQuery,
    useUpdateReviewMutation,
    useDeleteReviewMutation,
} = reviewsApi;