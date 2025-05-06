import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://randomuser.me/" }),
  endpoints: (builder) => ({
    getRandomUser: builder.query({
      query: () => "api/",
    }),
  }),
});

export const { useGetRandomUserQuery } = userApi;
