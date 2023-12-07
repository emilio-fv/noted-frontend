// Imports 
import { render, fireEvent } from '@testing-library/react';
import LoggedInUserReviewCard from '.';

xdescribe('Tests for the logged in user review card component', () => {
    test('Review card displays correct data when passed in review as prop of a favorited album', async () => {
        const fakeReview = {
            artist: 'Fake artist',
            artistId: '123',
            album: 'Fake album',
            albumId: '124',
            src: null,
            rating: 4,
            text: 'Fake review text',
            favorite: true,
            user: {
                username: 'fakeUsername'
            },
            likes: [
                {},
                {},
                {},
                {},
                {},
            ],
            createdAt: new Date(2023, 10, 1, 0, 0)
        };

        // TODO: render component with fake review data
        // const { getByText } = render(<LoggedInUserReviewCard review={fakeReview}/>)

        // TODO: test if correct data is displayed
            // 
    });

    test('Review card displays correct data when passed in review as prop of a non-favorited album', async () => {
        const fakeReview = {
            artist: 'Fake artist',
            artistId: '123',
            album: 'Fake album',
            albumId: '124',
            src: null,
            rating: 4,
            text: 'Fake review text',
            favorite: false,
            user: {
                username: 'fakeUsername'
            },
            likes: [
                {},
                {},
                {},
                {},
                {},
            ],
            createdAt: new Date(2023, 10, 1, 0, 0)
        };

        // TODO: render component with fake review data
        // TODO: test if correct data is displayed
    });

    test('Edit button calls passed in function on click', async () => {
        // TODO: render component with fake review data
        // TODO: test if edit button works
    });

    test('Delete button calls passed in function on click', async () => {
        // TODO: render component with fake review data
        // TODO: test if delete button works
    });
});

// Unit tests
    // Renders correctly