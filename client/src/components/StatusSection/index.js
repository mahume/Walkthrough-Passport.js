import React from 'react';
import { StyledSection, StyledLabel, StyledStatus } from "./styles";

const StatusSection = ({ bgColor, label, status }) => (
  <StyledSection bgColor={bgColor}>
    <StyledLabel>{label}</StyledLabel>
    <StyledStatus>{status}</StyledStatus>
  </StyledSection>
)

export default StatusSection;