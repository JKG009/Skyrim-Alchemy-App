import { createSlice } from "@reduxjs/toolkit";

export const toggleFishablePlantableSlice = createSlice({
  name: "toggle fishable plantable",
  initialState: {
    fishable: false,
    plantable: false,
  },
  reducers: {
    toggleFishable: (state) => {
      state.fishable = !state.fishable;
    },
    togglePlantable: (state) => {
      state.plantable = !state.plantable;
    },
  },
});

export const { toggleFishable, togglePlantable } =
  toggleFishablePlantableSlice.actions;

export default toggleFishablePlantableSlice.reducer;
