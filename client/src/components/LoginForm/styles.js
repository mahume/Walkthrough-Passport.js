import styled from 'styled-components';
import { grayscale } from '../../../styles/stylingTemplate';

export const Canvas = styled.div`
  height: 50%;
  background-color: ${grayscale.brightHi};
  border-top-right-radius: inherit;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  height: 85%;
  width: 85%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const InputsContainer = styled.div`
  height: auto;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  align-self: flex-end;
`;