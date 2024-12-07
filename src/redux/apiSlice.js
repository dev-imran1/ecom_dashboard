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
        url: "/category/create",
        method: "POST",
        body: data,
        headers: {
          Authorization: Cookies.get("accessToken"),
        },
      }),
      invalidatesTags: ["Category"],
    }),
    
    // updateProfilePic: builder.mutation({
    //   query: (file) => {
    //     const formData = new FormData();
    //     formData.append("profilePic", file);
    
    //     return {
    //       url: "/users/update",
    //       method: "POST",
    //       body: formData,
    //       headers: {
    //         Authorization: Cookies.get("accessToken")
    //       },
    //     };
    //   },
    // }),


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
    
    // updateProfilePic: builder.mutation({
    //   query: (data) => {
    //     const formData = new FormData();
    //     formData.append("profilePic", data);

    //     return {
    //       url: "/users/update",
    //       method: "POST",
    //       body: formData,
    //       headers: {
    //         Authorization: Cookies.get("accessToken"),
    //       },
    //     };
    //   },
    // }),
  }),
});

export const {
  useCreateCategoryMutation,
  useGetCategoryQuery,
  useUpdateProfilePicMutation,
} = eCom;
