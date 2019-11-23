import styled from 'styled-components/macro';
import { grayscale } from '../../../styles/stylingTemplate';

export const StyledDiv = styled.div`
  height: 108px;
  width: 100vw;
  background-color: ${grayscale.white};
  box-shadow: 0 3px 6px rgba(0, 0, 0, .15),
              0 2px 4px rgba(0, 0, 0, .12);

  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

