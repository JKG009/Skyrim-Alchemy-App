import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Main } from "../components";
import { data } from "../data/data";
import { updateSelectedEffect } from "../features/selectedEffect/selectedEffectSlice";
import { updateSelectedIngredient } from "../features/selectedIngredient/selectedIngredientSlice";

export default function MainContainer() {
  const [primaryIngredient, setPrimaryIngredient] = useState({});
  const dispatch = useDispatch();
  const selectedIngredient = useSelector(
    (state) => state.selectedIngredient.ingredient
  );
  const selectedEffect = useSelector((state) => state.selectedEffect.effect);

  const handleClick = (ingredient) => {
    setPrimaryIngredient(ingredient);
    dispatch(updateSelectedEffect(""), updateSelectedIngredient(""));
  };

  const renderTable = () => {
    if (selectedIngredient) {
      return data
        .filter((ingredientObject) =>
          ingredientObject.name
            .toUpperCase()
            .includes(selectedIngredient.toUpperCase())
        )
        .map((ingredientObject) => (
          <Main.TableRow
            key={ingredientObject.name}
            ingredientObject={ingredientObject}
          />
        ));
    }
    if (selectedEffect) {
      return data
        .filter((ingredientObject) =>
          ingredientObject.effects.some((effect) =>
            effect.toUpperCase().includes(selectedEffect.toUpperCase())
          )
        )
        .map((ingredientObject) => (
          <Main.TableRow
            key={ingredientObject.name}
            ingredientObject={ingredientObject}
          />
        ));
    }
    if (Object.keys(primaryIngredient).length > 0) {
      return data
        .filter((ingredientObject) =>
          ingredientObject.effects.some((effect) =>
            primaryIngredient.effects.some((effect2) => effect2 === effect)
          )
        )
        .map((ingredientObject) => (
          <Main.TableRow
            key={ingredientObject.name}
            ingredientObject={ingredientObject}
          />
        ));
    }
    return data.map((ingredientObject) => (
      <Main.TableRow key={ingredientObject.name}>
        <Main.TableData onClick={() => handleClick(ingredientObject)}>
          {ingredientObject.name}
        </Main.TableData>
        {ingredientObject.effects.map((effect) => (
          <Main.TableData>{effect}</Main.TableData>
        ))}
      </Main.TableRow>
    ));
  };

  return (
    <Main>
      <Main.ListContainer>
        <Main.TableHead>
          <Main.TitleTableRow>
            <Main.Title>Ingredient</Main.Title>
            <Main.Title colSpan="4">Effects</Main.Title>
          </Main.TitleTableRow>
        </Main.TableHead>
        <Main.TableBody>{renderTable()}</Main.TableBody>
      </Main.ListContainer>
    </Main>
  );
}
