import React from 'react';
import { ButtonContainer, CircularButton } from "./styles";
import { colors } from '../../styles/stylingTemplate';

const { red, yellow, green } = colors;

const MacButtons = () => (
  <ButtonContainer>
    <CircularButton color={red} />
    <CircularButton color={yellow} />
    <CircularButton color={green} />
  </ButtonContainer>
)

export default MacButtons;