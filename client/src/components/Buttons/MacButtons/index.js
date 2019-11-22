import React from 'react';
import { ButtonContainer, Button } from "./styles";
import { primary } from "../../../utils/colorPalette";

const { red, yellow, green } = primary;

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