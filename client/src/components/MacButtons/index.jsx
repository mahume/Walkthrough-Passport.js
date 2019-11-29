import React from 'react';
import { ButtonContainer, CircularButton } from "./styles";
import { colors } from '../../styles/stylingTemplate';

const { redMid, yellow, green } = colors;

const MacButtons = () => (
  <ButtonContainer>
    <CircularButton color={redMid} />
    <CircularButton color={yellow} />
    <CircularButton color={green} />
  </ButtonContainer>
)

export default MacButtons;