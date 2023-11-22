// Imports
import { render, screen } from '@testing-library/react';
import Hero from '.';

describe('Tests for hero component', () => {
    test('Test that images render', async () => {
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

        render(<Hero albumCovers={fakeAlbumCovers} />);

        const albumCovers = screen.getAllByRole('img');

        expect(albumCovers[0].getAttribute('src')).toBe('https://fastly.picsum.photos/id/336/200/200.jpg?hmac=VZ7MzNM30jINYNf5Oj_8zqPLTDAyKDk6eXWTGnNb4bU');
        expect(albumCovers[0].getAttribute('srcSet')).toBe('Test');
        expect(albumCovers[0].getAttribute('alt')).toBe('Test');

        expect(albumCovers[1].getAttribute('src')).toBe('https://fastly.picsum.photos/id/336/200/200.jpg?hmac=VZ7MzNM30jINYNf5Oj_8zqPLTDAyKDk6eXWTGnNb4bU');
        expect(albumCovers[1].getAttribute('srcSet')).toBe('Test');
        expect(albumCovers[1].getAttribute('alt')).toBe('Test');

        expect(albumCovers[2].getAttribute('src')).toBe('https://fastly.picsum.photos/id/336/200/200.jpg?hmac=VZ7MzNM30jINYNf5Oj_8zqPLTDAyKDk6eXWTGnNb4bU');
        expect(albumCovers[2].getAttribute('srcSet')).toBe('Test');
        expect(albumCovers[2].getAttribute('alt')).toBe('Test');

        expect(albumCovers[3].getAttribute('src')).toBe('https://fastly.picsum.photos/id/336/200/200.jpg?hmac=VZ7MzNM30jINYNf5Oj_8zqPLTDAyKDk6eXWTGnNb4bU');
        expect(albumCovers[3].getAttribute('srcSet')).toBe('Test');
        expect(albumCovers[3].getAttribute('alt')).toBe('Test');

        expect(albumCovers[4].getAttribute('src')).toBe('https://fastly.picsum.photos/id/336/200/200.jpg?hmac=VZ7MzNM30jINYNf5Oj_8zqPLTDAyKDk6eXWTGnNb4bU');
        expect(albumCovers[4].getAttribute('srcSet')).toBe('Test');
        expect(albumCovers[4].getAttribute('alt')).toBe('Test');
    });
});