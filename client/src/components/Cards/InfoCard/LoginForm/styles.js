import styled from 'styled-components';
import { grayscale, sizing } from "../../../../styles/stylingTemplate";

export const Canvas = styled.div`
  height: 60%;
  width: 100%;
  background-color: ${grayscale.brightHi};
  border-top-right-radius: inherit;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledForm = styled.form`
  width: 80%;
  height: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const StyledInputDiv = styled.div`
  height: auto;
  width: 100%;
`;

export const StyledLabel = styled.label`
  
`;

export const StyledInput = styled.input`
  height: 70px;
  width: 100%;
  border: none;
  border-radius: ${sizing.cardBorderRadius};
`;