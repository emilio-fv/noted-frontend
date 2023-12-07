import { createApi } from '@reduxjs/toolkit/query/react'
import { reauthBaseQuery } from '../config';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: reauthBaseQuery,
    endpoints: builder => ({
        register: builder.mutation({
            query: data => ({
                url: '/auth/register',
                method: 'POST',
                body: data,
            }),
            transformErrorResponse: (response, meta, arg) => {
                let errors = {};

                for (let key in response.data) {
                    errors[key] = response.data[key].message;
                }

                return errors;
            },
        }),
        login: builder.mutation({
            query: data => ({
                url: '/auth/login',
                method: 'POST',
                body: data,
            }),
            transformErrorResponse: (response, meta, arg) => {
                return response.data
            },
        }),
        logout: builder.mutation({
            query: () => ({
                url: '/auth/logout',
                method: 'POST',
            })
        })
    })
})

export const {
    useRegisterMutation,
    useLoginMutation,
    useLogoutMutation,
} = authApi;