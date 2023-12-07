// Imports 
import { render, fireEvent } from '@testing-library/react';
import NavButton from '.';

xdescribe('Tests for the nav bar button component', () => {
    test("If component renders correctly.", async () => {

    });

    test('If handleClick function is called when button is clicked.', async () => {
        const textToRender = 'Test';
        const mockFunction = jest.fn(console.log('Test'));
    
        const { getByText } = render(<NavButton text={textToRender} handleClick={mockFunction} />);
    
        expect(getByText('Test')).toBeDefined();
    
        fireEvent.click(getByText('Test'));
    
        expect(mockFunction).toHaveBeenCalled();
    });
});

// Unit tests
    // Renders correctly
    // Calls handleClick function when clicked
