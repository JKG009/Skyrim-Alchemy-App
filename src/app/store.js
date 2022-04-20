import { configureStore } from "@reduxjs/toolkit";
import { selectedIngredientReducer, selectedEffectReducer, toggleFishablePlantableReducer } from "../features";

export default configureStore({
  reducer: {
    selectedIngredient: selectedIngredientReducer,
    selectedEffect: selectedEffectReducer,
    toggleFishablePlantable: toggleFishablePlantableReducer,
  },
});
