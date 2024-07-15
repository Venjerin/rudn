import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath: 'signInApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/'
    }),
    endpoints: (builder) => ({
        getUser: builder.query({
            query: (userId) => `/personal-account/${userId}`
        }),
        registerUser: builder.mutation ({
            query: (user) => ({
                url:'registration',
                method: 'POST',
                body: user
            })
        })
    })
})


export const {useGetUserQuery, useRegisterUserMutation} = userApi;