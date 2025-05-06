import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const githubUserApi = createApi({
  reducerPath: "githubUserApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com/" }),
  endpoints: (builder) => ({
    getRandomUserList: builder.query({
      query: (since = Math.floor(Math.random() * 5000)) => `users?since=${since}&per_page=1`,
    }),
    getUserDetail: builder.query({
      query: (username) => `users/${username}`,
    }),
  }),
});

export const { useGetRandomUserListQuery, useGetUserDetailQuery } = githubUserApi;
