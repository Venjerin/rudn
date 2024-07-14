import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath: 'signInApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://.............'
    }),
    endpoints: (builder) => ({
        getUser: builder.query({
            query: (userId) => `/personal-account/${userId}`
        }),
        registerUser: builder.mutation ({
            query: (user) => ({
                url:'register',
                method: 'POST',
                body: user
            })
        })
    })
})

export const {useGetUserQuery, useRegisterUserMutation} = userApi;