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
        }),
        getUsersProfileData: builder.query({
            query: data => ({
                url: `/connect/${data}/profile`,
                method: 'GET'
            }),
            transformResponse: (response, meta, arg) => {
                return response.result;
            }
        })
    })
})

export const {
    useQueryUsersMutation,
    useGetUsersProfileDataQuery,
} = connectApi;