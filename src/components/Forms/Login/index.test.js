// Imports
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import LoginForm from '.';
import { Provider } from 'react-redux';
import { store } from '../../../store';

describe("Unit tests for login form component", () => {
    test("If component renders correctly.", async () => {
         const { getByLabelText, getByText, getAllByText } = render(
            <Provider store={store}>
                <LoginForm />
            </Provider>
         );

         expect(getByLabelText('Email')).toBeInTheDocument();
         expect(getByLabelText('Password')).toBeInTheDocument();
         expect(getAllByText('Login').length).toBe(2);
         expect(getByText("Don't have an account?")).toBeInTheDocument();
         expect(getByText('Register here.')).toBeInTheDocument();
    });

    test("If validation error messages render correctly when user submits form with missing fields.", async () => {
        const { getByText, getAllByText } = render(
            <Provider store={store}>
                <LoginForm />
            </Provider>
         );

        fireEvent.click(getAllByText('Login')[1]);

        await waitFor(() => {
            expect(getByText('Email is required.')).toBeInTheDocument();
            expect(getByText('Password is required.')).toBeInTheDocument();
        });
    });

    test("If validation error messages render correctly when user submits form with invalid email format.", async () => {
        const { getByLabelText, getByText, getAllByText } = render(
            <Provider store={store}>
                <LoginForm />
            </Provider>
        );

        fireEvent.change(getByLabelText('Email'), { target: { value: 'test' } });
        fireEvent.click(getAllByText('Login')[1]);

        await waitFor(() => {
            expect(getByText('Invalid email.')).toBeInTheDocument();
        });
    });

    test("If validation error message4s render correctly when user submits form with invalid credentials.", async () => {
        const { getByLabelText, getByText, getAllByText } = render(
            <Provider store={store}>
                <LoginForm />
            </Provider>
        );

        fireEvent.change(getByLabelText('Email'), { target: { value: 'test@test.com' } });
        fireEvent.change(getByLabelText('Password'), { target: { value: 'password1' } });
        fireEvent.click(getAllByText('Login')[1]);
        
        await waitFor(() => {
            expect(getByText('Invalid login.')).toBeInTheDocument();
        });
    });

    test("If auth state is updated when user submits form with valid.", async () => {
        const mockModalFunction = jest.fn();
        const { getByLabelText, getByText, getAllByText } = render(
            <Provider store={store}>
                <LoginForm setOpenModal={mockModalFunction}/>
            </Provider>
        );

        fireEvent.change(getByLabelText('Email'), { target: { value: 'test@test.com' } });
        fireEvent.change(getByLabelText('Password'), { target: { value: 'password' } });
        fireEvent.click(getAllByText('Login')[1]);

        await waitFor(() => {
            const authState = store.getState().auth;
            expect(authState.isLoggedIn).toBeTruthy();
            expect(authState.loggedInUser).toHaveProperty('username', 'test');
        })
    });
});

// Unit tests
    // Renders correctly
    // Invalid data: frontend validation errors
        // Required fields
        // Invalid email format
    // Invalid data: backend validation errors
        // Invalid credentials
    // Valid data
