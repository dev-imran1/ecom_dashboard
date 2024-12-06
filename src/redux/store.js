import { configureStore } from "@reduxjs/toolkit";
import { eCom } from "./apiSlice.js";
import authSlice from "./authSlice.js";


export const store = configureStore({
  reducer: {
    [eCom.reducerPath]: eCom.reducer,
    authSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(eCom.middleware),
});

