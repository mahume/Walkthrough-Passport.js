import React from 'react';
import { ButtonContainer, Button } from "./styles";
import { primary } from "../../utils/colorPalette";

const MacButtons = () => {
  return (
    <ButtonContainer>
      <Button color={primary.red} />
      <Button color={primary.yellow} />
      <Button color={primary.green} />
    </ButtonContainer>
  )
}

export default MacButtons;