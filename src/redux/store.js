import { configureStore } from "@reduxjs/toolkit";
import { eCom } from "./apiSlice.js";

export const store = configureStore({
  reducer: {
    [eCom.reducerPath]: eCom.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(eCom.middleware),
});

