import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeSort: 0,
  isOpenSort: false,
};

export const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    handleSort: (state) => {},
    toggleSort: (state) => {},
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
