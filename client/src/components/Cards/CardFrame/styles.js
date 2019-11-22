import styled from 'styled-components/macro';
import { sizing } from '../../../styles/stylingTemplate';

export const Frame = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  border-radius: ${sizing.cardBorderRadius};
  background-color: ${props => props.bgColor};
`;