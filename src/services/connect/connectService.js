import { createApi } from '@reduxjs/toolkit/query/react';
import { reauthBaseQuery } from '../config';

export const connectApi = createApi({
    reducerPath: 'connectApi',
    baseQuery: reauthBaseQuery,
    endpoints: builder => ({
        queryUsers: builder.mutation({
            query: data => ({
                url: '/connect/queryUsers',
                method: 'GET',
                params: {
                    searchQuery: data
                }
            }),
        })
    })
})

export const {
    useQueryUsersMutation
} = connectApi;