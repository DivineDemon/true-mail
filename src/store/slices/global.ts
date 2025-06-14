import { createSlice } from "@reduxjs/toolkit";

const initialState: GlobalState = {
  email: "",
  view: "list",
  mode: "single",
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload as string;
    },
    setMode: (state, action) => {
      state.mode = action.payload as "single" | "bulk";
    },
    setView: (state, action) => {
      state.view = action.payload as "list" | "grid";
    },
  },
});

export const { setEmail, setMode, setView } = globalSlice.actions;
export default globalSlice.reducer;
