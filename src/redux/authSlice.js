import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id:localStorage.getItem("authId") ? JSON.parse(localStorage.getItem("authId")) : null,
  user:{}
};

export const auth = createSlice({
  name: "auth",
  initialState,

  reducers: {
    setAuth(state, { payload }) {
      state.user = payload;
      localStorage.setItem("user",JSON.stringify(payload))
    },    
    setId(state, { payload }) {
      state.id = payload;
      localStorage.setItem("authId",JSON.stringify(payload))
    },
  },
});

// Exporting the setAuth action
export const { setAuth,setId } = auth.actions;
// Exporting the reducer
export default auth.reducer;
