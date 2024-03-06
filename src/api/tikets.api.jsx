import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const aviasalesApi = createApi({
  reducerPath: 'aviasalesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://aviasales-test-api.kata.academy/' }),
  endpoints: (builder) => ({
    getSearchId: builder.query({
      query: () => 'search',
    }),
    getTickets: builder.query({
      query: (searchId) => `tickets?searchId=${searchId}`,
    }),
  }),
});

export const { useGetSearchIdQuery, useGetTicketsQuery } = aviasalesApi;
