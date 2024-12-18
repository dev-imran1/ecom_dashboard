import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const eCom = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_BASE_URL }),
  tagTypes: ["Category", "User"],

  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => "/categories",
      providesTags: ["Category"],
    }),

    getUser: builder.query({
      query: (id) => `/users/single/${id}`,
      providesTags: ["User"],
    }),

    createCategory: builder.mutation({
      query: (data) => ({
        url: "/category/create",
        method: "POST",
        body: data,
        headers: {
          Authorization: Cookies.get("accessToken"),
        },
      }),
      invalidatesTags: ["Category"],
    }),

    updateProfilePic: builder.mutation({
      query: (formData) => ({
        url: "users/update",
        method: "POST",
        body: formData,
        headers: {
          Authorization: Cookies.get("accessToken"),
        },
      }),
      // invalidatesTags: ["Profile"],
    }),
  }),
});

export const {
  useCreateCategoryMutation,
  useGetCategoryQuery,
  useUpdateProfilePicMutation,
  useGetUserQuery,
} = eCom;
