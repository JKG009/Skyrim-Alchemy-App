import { createSlice } from "@reduxjs/toolkit";

export const selectedEffectSlice = createSlice({
  name: "selected effect",
  initialState: {
    effect: "",
  },
  reducers: {
    updateSelectedEffect: (state, action) => {
      state.effect = action.payload;
    },
  },
});

export const { updateSelectedEffect } = selectedEffectSlice.actions;

export default selectedEffectSlice.reducer;
