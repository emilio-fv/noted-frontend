// Imports
import { render, fireEvent, waitFor } from '@testing-library/react';
import TextInput from '.';

describe("Unit tests for text input component.", () => {
    test("If component renders correctly.", async () => {
        const mockHandleFormChanges = jest.fn();

        const { getByLabelText, getByText } = render(
            <TextInput 
                name={'Test'} 
                label={'Test'} 
                value={''}
                error={'Input error.'}
                handleChange={mockHandleFormChanges}
            />
        );

        expect(getByLabelText('Test')).toBeInTheDocument();
        expect(getByText('Input error.')).toBeInTheDocument();
    });

    test("If user can change input.", async () => {
        const mockHandleFormChanges = jest.fn();

        const { getByLabelText } = render(
            <TextInput 
                name={'input'}
                label={'Label'}
                value={''}
                handleChange={mockHandleFormChanges}
            />
        );

        const textField = getByLabelText('Label');

        fireEvent.change(textField, { target: { value: 'User input' }});

        await waitFor(() => {
            expect(mockHandleFormChanges).toHaveBeenCalledTimes(1);
        });
    });
});

// Unit tests
    // Renders correctly (name, label, value, error)
    // User can change input