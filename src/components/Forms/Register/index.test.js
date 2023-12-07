// Imports
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import RegisterForm from '.';
import { store } from '../../../store';

describe("Unit tests for register form component", () => {
    test("If component renders correctly.", async () => {
        const { getByLabelText, getByText } = render(
            <Provider store={store}>
                <RegisterForm />
            </Provider>
        );

        expect(getByLabelText('First Name')).toBeInTheDocument();
        expect(getByLabelText('Last Name')).toBeInTheDocument();
        expect(getByLabelText('Username')).toBeInTheDocument();
        expect(getByLabelText('Email')).toBeInTheDocument();
        expect(getByLabelText('Password')).toBeInTheDocument();
        expect(getByLabelText('Confirm Password')).toBeInTheDocument();
        expect(getByText('Create Account')).toBeInTheDocument();
        expect(getByText('Already have an account?')).toBeInTheDocument();
        expect(getByText('Login here.')).toBeInTheDocument();
    });

    test("If validation error messages render correctly when user submits form with missing fields.", async () => {
        const { getByText } = render(
            <Provider store={store}>
                <RegisterForm />
            </Provider>
        );

        fireEvent.click(getByText('Create Account'));

        expect(getByText('First Name required.')).toBeInTheDocument();
        expect(getByText('Last Name required.')).toBeInTheDocument();
        expect(getByText('Username required.')).toBeInTheDocument();
        expect(getByText('Email required.')).toBeInTheDocument();
        expect(getByText('Password required.')).toBeInTheDocument();
        expect(getByText('Confirm Password required.')).toBeInTheDocument();
    });

    test("If validation error messages render correctly when user submits form with invalid email format", async () => {
        const { getByLabelText, getByText } = render(
            <Provider store={store}>
                <RegisterForm />
            </Provider>
        );

        fireEvent.change(getByLabelText('Email'), { target: { value: 'invalidEmail' } });
        fireEvent.click(getByText('Create Account'));

        expect(getByText('Invalid email.')).toBeInTheDocument();
    });

    test("If validation error messages render correctly when user submits form with password that doesn't meet security requirements", async () => {
        const { getByLabelText, getByText } = render(
            <Provider store={store}>
                <RegisterForm />
            </Provider>
        );

        fireEvent.change(getByLabelText('Password'), { target: { value: 'passwor' } });
        fireEvent.click(getByText('Create Account'));

        expect(getByText('Password must be at least 8 characters.')).toBeInTheDocument();
    });

    test("If validation error messages render correctly when user submits form where confirm password doesn't match password", async () => {
        // Confirm password doesn't match
        const { getByLabelText, getByText, getAllByText } = render(
            <Provider store={store}>
                <RegisterForm />
            </Provider>
        );

        fireEvent.change(getByLabelText('Password'), { target: { value: 'password' } });
        fireEvent.change(getByLabelText('Confirm Password'), { target: { value: 'password1' } });
        fireEvent.click(getByText('Create Account'));

        await waitFor(() => {
            expect(getByText('Passwords must match.')).toBeInTheDocument();
        })
    });

    test("If validation error messages render correctly when user submits form with registered email and username", async () => {
        const { getByLabelText, getByText } = render(
            <Provider store={store}>
                <RegisterForm />
            </Provider> 
        );

        fireEvent.change(getByLabelText('First Name'), { target: { value: 'Test' } });
        fireEvent.change(getByLabelText('Last Name'), { target: { value: 'Test' } });
        fireEvent.change(getByLabelText('Username'), { target: { value: 'test' } });
        fireEvent.change(getByLabelText('Email'), { target: { value: 'test@test.com' } });
        fireEvent.change(getByLabelText('Password'), { target: { value: 'password' } });
        fireEvent.change(getByLabelText('Confirm Password'), { target: { value: 'password' } });
        fireEvent.click(getByText('Create Account'));

        await waitFor(() => {
            expect(getByText('Email already registered.')).toBeInTheDocument();
            expect(getByText('Username already registered.')).toBeInTheDocument();
        })
    });

    test("If auth state is updated when user submits form with valid.", async () => {
        const { getByLabelText, getByText } = render(
            <Provider store={store}>
                <RegisterForm />
            </Provider> 
        );

        fireEvent.change(getByLabelText('First Name'), { target: { value: 'Example' } });
        fireEvent.change(getByLabelText('Last Name'), { target: { value: 'Example' } });
        fireEvent.change(getByLabelText('Username'), { target: { value: 'example' } });
        fireEvent.change(getByLabelText('Email'), { target: { value: 'example@test.com' } });
        fireEvent.change(getByLabelText('Password'), { target: { value: 'password' } });
        fireEvent.change(getByLabelText('Confirm Password'), { target: { value: 'password' } });

        fireEvent.click(getByText('Create Account'));

        await waitFor(() => {
            const authState = store.getState().auth;
            expect(authState.isLoggedIn).toBeTruthy();
            expect(authState.loggedInUser).toHaveProperty('username', 'example');
        });
    });
});

// Unit tests
    // Renders correctly
    // Invalid data: frontend validation errors
        // Required fields
        // Invalid email format
        // Password doesn't meet security requirements
        // Confirm password doesn't match password
    // Invalid data: backend validation errors
        // Registered email and username
    // Valid data