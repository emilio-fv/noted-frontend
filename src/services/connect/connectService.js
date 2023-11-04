import { createApi } from '@reduxjs/toolkit/query/react';
import { reauthBaseQuery } from '../config';

export const connectApi = createApi({
    reducerPath: 'connectApi',
    baseQuery: reauthBaseQuery, // TODO base query
    endpoints: builder => ({
        // TODO connect API endpoints
    })
})

export const {

} = connectApi;