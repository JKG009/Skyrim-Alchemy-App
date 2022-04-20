import React, { useState } from "react";
import { Header } from "../components";
import { data } from "../data/data";
import { useDispatch, useSelector } from "react-redux";
import { updateSelectedIngredient } from "../features/selectedIngredient/selectedIngredientSlice";
import { updateSelectedEffect } from "../features/selectedEffect/selectedEffectSlice";
import {
  toggleFishable,
  togglePlantable,
} from "../features/toggleFishablePlantable/toggleFishablePlantableSlice";
import logo from "../images/logo.jpg";

export default function HeaderContainer() {
  const dispatch = useDispatch();
  const [fishableActive, setFishableActive] = useState(false);
  const [plantableActive, setPlantableActive] = useState(false);
  const [infoActive, setInfoActive] = useState(false);

  const storedIngredient = useSelector(
    (state) => state.selectedIngredient.ingredient
  );
  const storedEffect = useSelector((state) => state.selectedEffect.effect);

  const ingredientDataList = data.map((ingredient) => (
    <option key={ingredient.name} value={ingredient.name}>
      {ingredient.name}
    </option>
  ));
  const effectList = [];
  data.forEach((ingredient) =>
    ingredient.effects.forEach((effect) => {
      if (!effectList.includes(effect)) {
        effectList.push(effect);
      }
    })
  );
  const effectDataList = effectList
    .sort((a, b) => a.localeCompare(b))
    .map((effect) => (
      <option key={effect} value={effect}>
        {effect}
      </option>
    ));

  return (
    <Header>
      <Header.TitleContainer>
        <Header.Logo src={logo} />
        <Header.Title>Skyrim Alchemy Tool</Header.Title>
      </Header.TitleContainer>
      <Header.InputContainer>
        <Header.LabelContainer>
          <Header.InputLabel htmlFor="ingredient">
            Ingredient:
          </Header.InputLabel>
          <Header.Input
            type="text"
            id="ingredient"
            name="ingredient"
            list="ingredientList"
            value={storedIngredient}
            onChange={(e) => {
              dispatch(updateSelectedIngredient(e.target.value));
              if (storedEffect !== "") {
                dispatch(updateSelectedEffect(""));
              }
            }}
          />
        </Header.LabelContainer>
        <Header.LabelContainer>
          <Header.InputDataList id="ingredientList">
            {ingredientDataList}
          </Header.InputDataList>
          <Header.InputLabel htmlFor="effect">Effect:</Header.InputLabel>
          <Header.Input
            type="text"
            id="effect"
            name="effect"
            list="effectList"
            value={storedEffect}
            onChange={(e) => {
              dispatch(updateSelectedEffect(e.target.value));
              if (storedIngredient !== "") {
                dispatch(updateSelectedIngredient(""));
              }
            }}
          />
          <Header.InputDataList id="effectList">
            {effectDataList}
          </Header.InputDataList>
        </Header.LabelContainer>
      </Header.InputContainer>
      <Header.ButtonContainer>
        <Header.Button
          onClick={() => {
            dispatch(toggleFishable());
            setFishableActive(!fishableActive);
            if (plantableActive) {
              setPlantableActive(false)
              dispatch(togglePlantable())
            }
          }}
          active={fishableActive}
        >
          Fishable
        </Header.Button>
        <Header.Button
          onClick={() => {
            dispatch(togglePlantable());
            setPlantableActive(!plantableActive);
            if (fishableActive) {
              setFishableActive(false)
              dispatch(toggleFishable())
            }
          }}
          active={plantableActive}
        >
          Plantable
        </Header.Button>
        <Header.Info
          onClick={() => {
            setInfoActive(!infoActive);
          }}
          active={infoActive}
        >
          i
        </Header.Info>
      </Header.ButtonContainer>
    </Header>
  );
}
