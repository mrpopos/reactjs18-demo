import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 100,
  },
  reducers: {
    increment(state, action) {
      state.value = state.value + action.payload;
    },
    decrement(state, action) {
      state.value = state.value + action.payload;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
