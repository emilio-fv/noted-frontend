// Imports
import '@testing-library/jest-dom';
import { mockServer } from './mocks/server';

beforeAll(() => {
    mockServer.listen();
    mockServer.events.on('request:start', ({ request }) => {
        console.log('MSW intercepted:', request.method, request.url);
    });

    mockServer.events.on('response:mocked', ({ request, requestId, response }) => {
        console.log(
          '%s %s received %s %s',
          request.method,
          request.url,
          response.status,
          response.statusText
        )
      });
});

afterEach(() => {
    mockServer.resetHandlers();
});

afterAll(() => {
    mockServer.close();
});