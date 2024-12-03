import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const eCom = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_BASE_URL }),
  tagTypes: ["Category"],

  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => "/categories",
      providesTags: ["Category"],
    }),

    createCategory: builder.mutation({
      query: (data) => ({
        url: "/categories/create",
        method: "POST",
        body: data,
        headers: {
          Authorization: Cookies.get("accessToken"),
        },
      }),
      invalidatesTags: ["Category"],
    }),
  }),
});

export const { useCreateCategoryMutation, useGetCategoryQuery } = eCom;
