import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (limit = 10) => `products?limit=${limit}`,
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
