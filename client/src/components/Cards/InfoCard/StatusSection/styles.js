import styled from 'styled-components/macro';
import { grayscale, font, margin } from "../../../../styles/stylingTemplate";

export const StyledSection = styled.section`
  width: 100%;
  height: 80px;
  background-color: ${props => props.bgColor};
`;

export const StyledLabel = styled.label`
  font-size: ${font.sm};
  color: ${grayscale.brightHi};
  margin-left: ${margin.med};
`;

export const StyledStatus = styled.p`
  font-size: ${font.med};
  color: ${grayscale.white};
  margin-left: ${margin.med}
`;