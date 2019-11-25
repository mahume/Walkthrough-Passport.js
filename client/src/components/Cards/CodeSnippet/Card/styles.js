import styled from 'styled-components';
import { borderRadius, grayscale } from '../../../../styles/stylingTemplate';

export const Frame = styled.div`
  width: 100%;
  height: 100%;
  border-radius: ${borderRadius.lg};
  background-color: ${grayscale.darkHi};
`;
