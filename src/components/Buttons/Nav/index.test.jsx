// Imports 
import { render, fireEvent } from '@testing-library/react';
import NavButton from '.';

describe('Tests for the nav bar button component', () => {
    test('Nav button displays text and performs click function that are passed as props.', async () => {
        const textToRender = 'Test';
        const mockFunction = jest.fn(console.log('Test'));
    
        const { getByText } = render(<NavButton text={textToRender} handleClick={mockFunction} />);
    
        expect(getByText('Test')).toBeDefined();
    
        fireEvent.click(getByText('Test'));
    
        expect(mockFunction).toHaveBeenCalled();
    });
})
