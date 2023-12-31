import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLoggedIn: true };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default authSlice.reducer;
