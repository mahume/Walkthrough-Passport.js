import React from 'react';
import MacButtons from '../MacButtons/index';
import { StyledDiv } from './styles';

const CardNavbar = ({ bgColor }) => (
  <StyledDiv bgColor={bgColor}>
    <MacButtons />
  </StyledDiv>
)

export default CardNavbar;