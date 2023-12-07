// Imports
import { render, fireEvent, waitFor } from '@testing-library/react';
import PasswordInput from '.';

describe("Unit tests for password input component.", () => {
    test("If component renders correctly.", async () => {
        const mockHandleFormChanges = jest.fn();

        const { getByLabelText, getByText } = render(
            <PasswordInput 
                name={'passwordInput'}
                label={'Password'}
                value={''}
                handleChange={mockHandleFormChanges}
                error={'Password error.'}
            />
        );

        expect(getByLabelText('Password').getAttribute('type')).toBe('password');
        expect(getByLabelText('Password')).toBeInTheDocument();
        expect(getByText('Password error.')).toBeInTheDocument();
    });

    test("If user can change input.", async () => {
        const mockHandleFormChanges = jest.fn();

        const { getByLabelText } = render(
            <PasswordInput 
                name={'passwordInput'}
                label={'Password'}
                value={''}
                handleChange={mockHandleFormChanges}
            />
        );

        const passwordField = getByLabelText('Password');

        fireEvent.change(passwordField, { target: { value: 'password' }});

        await waitFor(() => {
            expect(mockHandleFormChanges).toHaveBeenCalledTimes(1);
        })
    });

    test("If user can input password with the visibility feature defaulting to off", async () => {
        const mockHandleFormChanges = jest.fn();

        const { getByLabelText, getAllByTestId } = render(
            <PasswordInput 
                name={'passwordInput'}
                label={'Password'}
                value={'test'}
                handleChange={mockHandleFormChanges}
            />
        );

        const visibilityButton = getAllByTestId('toggle-password-visibility');
        fireEvent.click(visibilityButton[0]);

        await waitFor(() => {
            expect(getByLabelText('Password').getAttribute('type')).toBe('text');
        });
    });

    test("If user can toggle visibility feature on", async () => {
        const mockHandleFormChanges = jest.fn();

        const { getByLabelText, getAllByTestId } = render(
            <PasswordInput 
                name={'passwordInput'}
                label={'Password'}
                value={'test'}
                handleChange={mockHandleFormChanges}
            />
        );

        const visibilityButton = getAllByTestId('toggle-password-visibility');
        fireEvent.click(visibilityButton[0]);
        fireEvent.click(visibilityButton[0]);

        await waitFor(() => {
            expect(getByLabelText('Password').getAttribute('type')).toBe('password');
        });
    })
});

// Unit tests
    // Renders correctly (name, label, value, error)
    // Handles input
    // Visibility feature