import { createSlice } from "@reduxjs/toolkit";

const initialState: GlobalState = {
  email: "",
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
  },
});

export const { setEmail, setMode } = globalSlice.actions;
export default globalSlice.reducer;
