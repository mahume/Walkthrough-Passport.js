import styled from 'styled-components/macro';
import { sizing, grayscale } from '../../../../styles/stylingTemplate';

export const Frame = styled.div`
  width: 100%;
  height: 100%;
  border-radius: ${sizing.cardBorderRadius};
  background-color: ${grayscale.darkHi};
`;
