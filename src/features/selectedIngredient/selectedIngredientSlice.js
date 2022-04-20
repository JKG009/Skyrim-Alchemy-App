import { createSlice } from "@reduxjs/toolkit";

export const selectedIngredientSlice = createSlice({
  name: "selected ingredient",
  initialState: {
    ingredient: "",
  },
  reducers: {
    updateSelectedIngredient: (state, action) => {
      state.ingredient = action.payload;
    },
  },
});

export const { updateSelectedIngredient } = selectedIngredientSlice.actions;

export default selectedIngredientSlice.reducer;
