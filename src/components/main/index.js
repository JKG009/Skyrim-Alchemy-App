import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  resetPrimaryIngredient,
  updatePrimaryIngredient,
} from "../../features/primaryIngredient/primaryIngredientSlice";
import { updateSelectedEffect } from "../../features/selectedEffect/selectedEffectSlice";
import { updateSelectedIngredient } from "../../features/selectedIngredient/selectedIngredientSlice";
import {
  MainContainer,
  Container,
  Title,
  ListContainer,
  TableBody,
  TableHead,
  TableRow,
  TitleTableRow,
  TableData,
} from "./styles/main";

export default function Main({ children }) {
  return <MainContainer>{children}</MainContainer>;
}

Main.Container = function MainContainer({ children }) {
  return <Container>{children}</Container>;
};

Main.Title = function MainTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Main.ListContainer = function MainListContainer({ children }) {
  return <ListContainer>{children}</ListContainer>;
};

Main.TableHead = function MainTableHead({ children }) {
  return <TableHead>{children}</TableHead>;
};

Main.TableBody = function MainTableBody({ children }) {
  return <TableBody>{children}</TableBody>;
};

Main.TitleTableRow = function MainTitleTableRow({ children }) {
  return <TitleTableRow>{children}</TitleTableRow>;
};

Main.TableData = function MainTableData({ children, ...restProps }) {
  return <TableData {...restProps}>{children}</TableData>;
};

Main.TableRow = function MainTableRow({
  children,
  ingredientObject,
  ...restProps
}) {
  const dispatch = useDispatch();
  const primaryIngredient = useSelector(
    (state) => state.primaryIngredient.primaryIngredient
  );
  const handleClick = (ingredient) => {
    if (primaryIngredient === ingredient) {
      return dispatch(resetPrimaryIngredient());
    }
    dispatch(updateSelectedEffect(""));
    dispatch(updateSelectedIngredient(""));
    dispatch(updatePrimaryIngredient(ingredient));
  };

  return (
    <TableRow
      active={primaryIngredient.name === ingredientObject.name && true}
      {...restProps}
    >
      <Main.TableData onClick={() => handleClick(ingredientObject)}>
        {ingredientObject.name}
      </Main.TableData>
      {ingredientObject.effects.map((effect) => (
        <Main.TableData key={`${ingredientObject.name} ${effect}`}>
          {effect}
        </Main.TableData>
      ))}
    </TableRow>
  );
};
