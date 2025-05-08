import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_BASE_URL }),
  endpoints: (builder) => ({
    getRandomUser: builder.query({
      query: () => "api/?results=1000",
    }),
  }),
});

export const { useGetRandomUserQuery } = userApi;
