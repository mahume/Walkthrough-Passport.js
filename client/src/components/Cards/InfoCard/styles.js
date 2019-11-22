import styled from 'styled-components/macro';
import { grayscale } from '../../../../styles/stylingTemplate';

export const Canvas = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${grayscale.brightLo};
  border-radius: 20px;;

  display: flex;
  flex-direction: row;
`;
