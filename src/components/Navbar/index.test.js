// Imports
import { render, fireEvent } from '@testing-library/react';
import Navbar from '.';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

const createMockStore = configureMockStore();

const loggedOutMockStore = createMockStore({
    auth: {
        isLoggedIn: false, 
        loggedInUser: null,
    }
});

const loggedInMockStore = createMockStore({
    auth: {
        isLoggedIn: true, 
        loggedInUser: {
            username: 'random_user42'
        },
    }
});

describe('Unit tests for navbar component', () => {
    test("If component renders correctly for a logged out user.", async () => {
        const { getByTestId, getAllByText, getByText } = render(
            <Provider store={loggedOutMockStore}>
                <MemoryRouter initialEntries={['/']}>
                    <Navbar />
                </MemoryRouter>
            </Provider>
        );

        expect(getByText('Login')).toBeInTheDocument();
    });

    test("If component renders correctly for a logged in user.", async () => {
        const { getByTestId, getAllByText, getByText } = render(
            <Provider store={loggedInMockStore}>
                <MemoryRouter initialEntries={['/']}>
                    <Navbar />
                </MemoryRouter>
            </Provider>
        );

        expect(getByText('Log Review')).toBeInTheDocument();
        expect(getByTestId('account-button')).toBeInTheDocument();
    });
});

// Unit tests
    // Renders correctly
        // Logged in user
        // Logged out user