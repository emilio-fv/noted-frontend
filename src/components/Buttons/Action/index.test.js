// Imports
import { render, fireEvent } from '@testing-library/react';
import ActionButton from '.';

describe('Tests for action button component', () => {
    test('Action button displays text that is passed as a prop.', async () => {
        const textToRender = 'Hello, world';
        const mockFunction = jest.fn(console.log('Hello, world'));
    
        const { getByText } = render(<ActionButton text={textToRender} handleClick={mockFunction}/>);
    
        expect(getByText('Hello, world')).toBeDefined();
    });
    
    test('Action button calls function passed as a prop when button is clicked.', async () => {
        const textToRender = 'Hello, world';
        const mockFunction = jest.fn(console.log('Hello, world'));

        const { getByText } = render(<ActionButton text={textToRender} handleClick={mockFunction}/>);

        fireEvent.click(getByText('Hello, world'));
    
        expect(mockFunction).toHaveBeenCalled();
    })
});
