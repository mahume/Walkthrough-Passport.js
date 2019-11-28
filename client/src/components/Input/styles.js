import styled from 'styled-components';
import { 
  borderRadius, 
  margin, 
  padding, 
  grayscale, 
  font,
  colors,
} from '../../styles/stylingTemplate';
const { redMid, redLight } = colors;
const { white, darkHi, brightLo } = grayscale;

export const InputContainer = styled.div`
  width: 100%;
  height: 60px;
  margin-bottom: ${margin.med};
`;

export const StyledInput = styled.input`
  height: 100%;
  width: 100%;
  border: ${({ error }) => error ? `2px solid ${redMid}` : 'none'};
  border-radius: ${borderRadius.sm};
  color: ${darkHi};
  font-size: ${font.sm};
  padding-left: ${padding.med};
  background-color: ${({ error }) => error ? redLight : white};
  
  ::placeholder {
    color: ${({ error }) => error ? redMid : brightLo};
  }
`;

