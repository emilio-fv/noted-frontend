// Imports
import { render, fireEvent, waitFor } from '@testing-library/react';
import NavLink from '.';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

describe("Unit tests for nav link component.", () => {
    test("If component renders correctly", async () => {
        const { getByText } = render(
            <MemoryRouter initialEntries={['/']}>
                <NavLink text={'Test'} path={null}/>
            </MemoryRouter>
        );

        expect(getByText('Test')).toBeInTheDocument();
    });

    test("If component navigates to path upon click.", async () => {
        const { getByText } = render(
            <BrowserRouter >
                <NavLink text={'Test'} path={'/test'}/>
            </BrowserRouter>
        );

        fireEvent.click(getByText('Test'));

        await waitFor(() => {
            expect(window.location.pathname).toBe('/test');
        })
    });
})

// Unit tests
    // Renders correctly
    // Calls handleClick function on click