import styled from 'styled-components';
import { grayscale } from '../../styles/stylingTemplate';

export const Canvas = styled.div`
  height: 100%;
  background-color: ${grayscale.medHi};
  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;

  display: flex;
  flex-direction: column;
`;