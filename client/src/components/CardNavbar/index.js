import React from 'react';
import Mac from '../../Buttons/Mac/index';
import { StyledDiv } from './styles';

const CardNavbar = ({ bgColor }) => {
  return (
    <StyledDiv bgColor={bgColor}>
      <Mac />
    </StyledDiv>
  )
}

export default CardNavbar;