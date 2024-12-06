import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";

const initialState = {
  user: localStorage.getItem("auth") ? JSON.parse(localStorage.getItem("auth")) : {}
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Correctly defining the setAuth reducer
    setAuth(state, { payload }) {
      state.user = payload;
      localStorage.setItem("auth",JSON.stringify(payload))
    },
  },
});

// Exporting the setAuth action
export const { setAuth } = auth.actions;

// Exporting the reducer
export default auth.reducer;

