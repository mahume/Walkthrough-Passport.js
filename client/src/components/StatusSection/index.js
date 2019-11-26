import React from 'react';
import { StyledSection, StyledLabel, StyledStatus } from "./styles";

const StatusBlock = ({ bgColor, label, status }) => {
  return (
    <StyledSection bgColor={bgColor}>
      <StyledLabel>{label}</StyledLabel>
      <StyledStatus>{status}</StyledStatus>
    </StyledSection>
  )
}

export default StatusBlock;