import React from 'react';
import MacButtons from '../../Buttons/MacButtons/index';
import { StyledDiv } from "./styles";

const CardNavbar = ({ bgColor }) => {
  return (
    <StyledDiv bgColor={bgColor}>
      <MacButtons />
    </StyledDiv>
  )
}

export default CardNavbar;