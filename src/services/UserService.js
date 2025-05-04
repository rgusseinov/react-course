import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const userAPI = createApi({
  reducerPath: 'userAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    fetchAllUsers: builder.query({
      query:  `/users`,
    }),
  }),
})