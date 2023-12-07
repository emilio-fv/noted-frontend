// Imports
import { setupServer } from 'msw/node';
import { authHandlers } from './authHandlers';

export const mockServer = setupServer(...authHandlers);