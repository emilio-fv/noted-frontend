// Imports
import { http, HttpResponse } from 'msw';

export const authHandlers = [
    http.post('http://localhost:3000/api/auth/register', async ({ request }) => {
        const fakeRegisteredUser = {
            firstName: 'Test',
            lastName: 'Test',
            username: 'test',
            email: 'test@test.com',
            password: 'password',
        };

        const formData = await request.json(); 

        if (formData.username === fakeRegisteredUser.username || formData.email === fakeRegisteredUser.email) {
            const errors = {
                username: formData.username === fakeRegisteredUser.username ? { message: 'Email already registered.' } : null,
                email: formData.email === fakeRegisteredUser.email ? { message: 'Username already registered.' } : null,
            };

            return HttpResponse.json(errors, {
                status: 400
            });
        } else {
            const registeredUser = {
                username: formData.username,
            };

            return HttpResponse.json(registeredUser, {
                status: 200,
                headers: {
                    'Set-Cookie': 'accessToken=test',
                    'Set-Cookie': 'refreshToken=test',
                }
            });
        }
    }),
    http.post('http://localhost:3000/api/auth/login', async ({ request, params, cookies }) => {
        const fakeRegisteredUser = {
            firstName: 'Test',
            lastName: 'Test',
            username: 'test',
            email: 'test@test.com',
            password: 'password',
        };

        const formData = await request.json();

        if (formData.email !== fakeRegisteredUser.email || formData.password !== fakeRegisteredUser.password) {
            return HttpResponse.json('Invalid login.', {
                status: 400
            });
        } else {
            const loggedInUser = {
                username: fakeRegisteredUser.username
            };

            return HttpResponse.json(loggedInUser, {
                status: 200,
                headers: {
                    'Set-Cookie': 'accessToken=test',
                    'Set-Cookie': 'refreshToken=test',
                }
            });
        }
    }),
    // http.post('/logout'),
];