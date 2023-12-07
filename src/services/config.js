import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';

const isProduction = process.env.NODE_ENV === 'production';

const baseUrl = isProduction ? 'https://noted-backend.vercel.app/api' : 'http://localhost:3000/api';

const customBaseQuery = fetchBaseQuery({
    baseUrl: baseUrl,
    credentials: 'include'
});

export const reauthBaseQuery = async (args, api, extraOptions) => {
    // Step 1 Attempts the api request
    let result = await customBaseQuery(args, api, extraOptions);

    // Step 2 Checks for a 401 error & expired access token error message 
    if (result.error && result.error.status === 401) {
        // Step 3 Makes a call to the API endpoint that refreshes the access token
        const refreshResult = await customBaseQuery('/auth/refresh', api, extraOptions);

        // Step 4 Checks if access token has been refreshed
        if (refreshResult.data) {
            // Step 5 If successful, an additional attempt of original api request is made. 
            result = await customBaseQuery(args, api, extraOptions);
        } else {
            // Step 5 If not, the user is logged out and prompted to sign in again
            await customBaseQuery('/auth/logout', api, extraOptions);
        }
    }

    return result;
}

