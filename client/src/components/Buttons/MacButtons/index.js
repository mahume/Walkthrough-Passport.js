import React from 'react';
import { ButtonContainer, Button } from "./styles";
import { colors } from "../../../styles/stylingTemplate";

const { red, yellow, green } = colors;

const MacButtons = () => {
  return (
    <ButtonContainer>
      <Button color={red} />
      <Button color={yellow} />
      <Button color={green} />
    </ButtonContainer>
  )
}

export default MacButtons;