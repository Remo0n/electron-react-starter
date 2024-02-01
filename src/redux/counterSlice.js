// redux/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lemmaBlocks: [],
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setLemmaBlocks: (state, action) => {
      state.lemmaBlocks = action.payload;
    },
  },
});

export const { setLemmaBlocks } = counterSlice.actions;
export default counterSlice.reducer;
