import React from "react";
import {
  HeaderContainer,
  TitleContainer,
  Title,
  Logo,
  InputContainer,
  LabelContainer,
  InputLabel,
  Input,
  InputDataList,
  ButtonContainer,
  Button,
  Info,
  InfoContainer,
  InfoTitle,
  InfoText,
} from "./styles/header";

export default function Header({ children }) {
  return <HeaderContainer>{children}</HeaderContainer>;
}

Header.TitleContainer = function HeaderTitleContainer({ children }) {
  return <TitleContainer>{children}</TitleContainer>;
};

Header.Logo = function HeaderLogo({ ...restProps }) {
  return <Logo {...restProps} />;
};

Header.Title = function HeaderTitle({ children }) {
  return <Title>{children}</Title>;
};

Header.LabelContainer = function HeaderLabelContainer({ children }) {
  return <LabelContainer>{children}</LabelContainer>;
};

Header.InputContainer = function HeaderInputContainer({ children }) {
  return <InputContainer>{children}</InputContainer>;
};

Header.InputLabel = function HeaderInputLabel({ children, ...restProps }) {
  return <InputLabel {...restProps}>{children}</InputLabel>;
};

Header.Input = function HeaderInput({ ...restProps }) {
  return <Input {...restProps} />;
};

Header.InputDataList = function HeaderInputDataList({
  children,
  ...restProps
}) {
  return <InputDataList {...restProps}>{children}</InputDataList>;
};

Header.ButtonContainer = function HeaderButtonContainer({ children }) {
  return <ButtonContainer>{children}</ButtonContainer>;
};

Header.Button = function HeaderButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Header.Info = function HeaderInfo({ children, ...restProps }) {
  return <Info {...restProps}>{children}</Info>;
};

Header.InfoContainer = function HeaderInfoContainer({ children, ...restProps }) {
  return <InfoContainer {...restProps}>{children}</InfoContainer>;
};

Header.InfoTitle = function HeaderInfoTitle({ children }) {
  return <InfoTitle>{children}</InfoTitle>;
};

Header.InfoText = function HeaderInfoText({ children }) {
  return <InfoText>{children}</InfoText>;
};
