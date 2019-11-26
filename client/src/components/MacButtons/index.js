import React from 'react';
import { ButtonContainer, MacButton } from "./styles";
import { colors } from "../../../styles/stylingTemplate";

const { red, yellow, green } = colors;

const MacButtons = () => (
  <ButtonContainer>
    <MacButton color={red} />
    <MacButton color={yellow} />
    <MacButton color={green} />
  </ButtonContainer>
)

export default MacButtons;