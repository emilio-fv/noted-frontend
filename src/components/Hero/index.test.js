// Imports
import { render, screen } from '@testing-library/react';
import Hero from '.';
import { MemoryRouter, Outlet, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

xdescribe('Tests for hero component', () => {
    test('Test that images render correctly', async () => {
        const mockHandleOpenModal = jest.fn(() => console.log('mockHandleOpenModal'));

        const fakeAlbumCovers = [
            {
                src: 'https://fastly.picsum.photos/id/336/200/200.jpg?hmac=VZ7MzNM30jINYNf5Oj_8zqPLTDAyKDk6eXWTGnNb4bU',
                srcSet: 'Test',
                alt: 'Test'
            },
            {
                src: 'https://fastly.picsum.photos/id/336/200/200.jpg?hmac=VZ7MzNM30jINYNf5Oj_8zqPLTDAyKDk6eXWTGnNb4bU',
                srcSet: 'Test',
                alt: 'Test'
            },
            {
                src: 'https://fastly.picsum.photos/id/336/200/200.jpg?hmac=VZ7MzNM30jINYNf5Oj_8zqPLTDAyKDk6eXWTGnNb4bU',
                srcSet: 'Test',
                alt: 'Test'
            },
            {
                src: 'https://fastly.picsum.photos/id/336/200/200.jpg?hmac=VZ7MzNM30jINYNf5Oj_8zqPLTDAyKDk6eXWTGnNb4bU',
                srcSet: 'Test',
                alt: 'Test'
            },
            {
                src: 'https://fastly.picsum.photos/id/336/200/200.jpg?hmac=VZ7MzNM30jINYNf5Oj_8zqPLTDAyKDk6eXWTGnNb4bU',
                srcSet: 'Test',
                alt: 'Test'
            },
        ];

        const { getAllByAltText } = render(
            <MemoryRouter>
                <Routes>
                    <Route path='/' element={<Outlet context={[mockHandleOpenModal]} />}>
                        <Route index element={<Hero albumCovers={fakeAlbumCovers} />}/>
                    </Route>
                </Routes>
            </MemoryRouter>
        );

        const albumCovers = getAllByAltText(fakeAlbumCovers[0].alt);

        console.log(albumCovers.length);

        expect(albumCovers[0].getAttribute('src')).toBe(fakeAlbumCovers[0].src);
        expect(albumCovers[0].getAttribute('srcSet')).toBe(fakeAlbumCovers[0].srcSet);
        expect(albumCovers[0].getAttribute('alt')).toBe(fakeAlbumCovers[0].alt);

        expect(albumCovers[1].getAttribute('src')).toBe(fakeAlbumCovers[1].src);
        expect(albumCovers[1].getAttribute('srcSet')).toBe(fakeAlbumCovers[1].srcSet);
        expect(albumCovers[1].getAttribute('alt')).toBe(fakeAlbumCovers[1].alt);

        expect(albumCovers[2].getAttribute('src')).toBe(fakeAlbumCovers[2].src);
        expect(albumCovers[2].getAttribute('srcSet')).toBe(fakeAlbumCovers[2].srcSet);
        expect(albumCovers[2].getAttribute('alt')).toBe(fakeAlbumCovers[2].alt);

        expect(albumCovers[3].getAttribute('src')).toBe(fakeAlbumCovers[3].src);
        expect(albumCovers[3].getAttribute('srcSet')).toBe(fakeAlbumCovers[3].srcSet);
        expect(albumCovers[3].getAttribute('alt')).toBe(fakeAlbumCovers[3].alt);

        expect(albumCovers[4].getAttribute('src')).toBe(fakeAlbumCovers[4].src);
        expect(albumCovers[4].getAttribute('srcSet')).toBe(fakeAlbumCovers[4].srcSet);
        expect(albumCovers[4].getAttribute('alt')).toBe(fakeAlbumCovers[4].alt);
    });
});