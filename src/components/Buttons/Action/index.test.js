// Imports
import { render, fireEvent } from '@testing-library/react';
import ActionButton from '.';

describe('Unit tests for action button component', () => {
    test('If action button renders correctly', async () => {
        const buttonText = 'Hello, world';
        const mockFunction = jest.fn(console.log('Hello, world'));
    
        const { getByText } = render(<ActionButton text={buttonText} handleClick={mockFunction}/>);
    
        expect(getByText('Hello, world')).toBeDefined();
    });

    test('If handleClick function is called when button is clicked.', async () => {
        const buttonText = 'Hello, world';
        const mockFunction = jest.fn(console.log('Hello, world'));

        const { getByText } = render(<ActionButton text={buttonText} handleClick={mockFunction}/>);

        fireEvent.click(getByText('Hello, world'));
    
        expect(mockFunction).toHaveBeenCalled();
    })
});

// Unit tests
    // Renders correctly
    // Calls handleClick function when button is clicked