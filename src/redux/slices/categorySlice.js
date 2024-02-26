import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeCategory: 0,
  activeCategory2: 0,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    handleCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleCategory } = categorySlice.actions;

export default categorySlice.reducer;
