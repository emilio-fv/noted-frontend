// Imports
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import LogoLink from '.';
import { MemoryRouter } from 'react-router-dom';

describe("Unit tests for logo link.", () => {
    test("If component renders correctly", async () => { 
        const { getByText } = render(
            <MemoryRouter initialEntries={['/']}>
                <LogoLink />
            </MemoryRouter>
        );

        const logoLink = getByText('Noted');

        expect(logoLink).toBeInTheDocument();
    });

    test("If routed to landing page when clicked", async () => { 
        const { getByText } = render(
            <MemoryRouter initialEntries={['/']}>
                <LogoLink />
            </MemoryRouter>
        );

        const logoLink = getByText('Noted');

        fireEvent.click(logoLink);

        await waitFor(() => {
            expect(window.location.pathname).toBe('/');
        });
    });
});

// Unit tests
    // Component renders correctly
    // Redirects to / route when clicked