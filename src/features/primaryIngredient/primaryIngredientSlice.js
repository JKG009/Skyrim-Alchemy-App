import { createSlice } from "@reduxjs/toolkit";

export const primaryIngredientSlice = createSlice({
  name: "primary ingredient",
  initialState: {
      primaryIngredient: {
      }
  },
  reducers: {
    updatePrimaryIngredient: (state, action) => {
      state.primaryIngredient = action.payload;
    },
    resetPrimaryIngredient: (state) => {
      state.primaryIngredient = {};
    },
  },
});

export const { updatePrimaryIngredient, resetPrimaryIngredient } =
  primaryIngredientSlice.actions;

export default primaryIngredientSlice.reducer;
