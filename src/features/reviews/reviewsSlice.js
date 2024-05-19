import { createSlice } from "@reduxjs/toolkit";
import { reviewsApi } from '../../services/reviews/reviewsService';

const initialState = {
    selectedAlbumToReview: null,
    selectedReviewToDelete: null,
    selectedReviewToUpdate: null,
};

export const reviewsSlice = createSlice({
    name: 'reviews',
    initialState, 
    reducers: {
        setSelectedAlbumToReview: (state, action) => {
            state.selectedAlbumToReview = action.payload
        },
        setSelectedReviewToDelete: (state, action) => {
            state.selectedReviewToDelete = action.payload
        },
        setSelectedReviewToUpdate: (state, action) => {
            state.selectedReviewToUpdate = action.payload
        }
    }, 
    extraReducers: builder => {
        builder
            .addMatcher(reviewsApi.endpoints.createReview.matchFulfilled, (state, action) => {
                state.selectedAlbumToReview = null
            })
    }
})

export const {
    setSelectedAlbumToReview,
    setSelectedReviewToDelete,
    setSelectedReviewToUpdate,
} = reviewsSlice.actions;

export default reviewsSlice.reducer;