import React from "react";
import { useSelector } from "react-redux";
import { Main } from "../components";
import { ingredientList } from "../data";

export default function MainContainer() {
  const selectedIngredient = useSelector(
    (state) => state.selectedIngredient.ingredient
  );
  const selectedEffect = useSelector((state) => state.selectedEffect.effect);
  const primaryIngredient = useSelector(
    (state) => state.primaryIngredient.primaryIngredient
  );

  const renderTable = () => {
    if (selectedIngredient) {
      return ingredientList
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
      return ingredientList
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
      return ingredientList
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
    return ingredientList.map((ingredientObject) => (
      <Main.TableRow
        key={ingredientObject.name}
        ingredientObject={ingredientObject}
      />
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