import styled from 'styled-components';
import { sizing, margin, padding, grayscale, font } from "../../../../styles/stylingTemplate";

export const InputContainer = styled.div`
  width: 100%;
  height: 70px;
  margin-bottom: ${margin.med};
`;

export const StyledInput = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  border-radius: ${sizing.cardBorderRadius};
  color: ${grayscale.darkHi};
  font-size: ${font.sm};
  padding-left: ${padding.med};
  
  ::placeholder {
    color: ${grayscale.brightLo};
  }
`;

