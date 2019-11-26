import styled from 'styled-components';
import { margin } from '../../styles/stylingTemplate';

export const ButtonContainer = styled.div`
  height: 20px;
  width: 60px;
  margin-left: ${margin.med};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CircularButton = styled.div`
  height: 15px;
  width: 15px;
  border-radius: 100%;
  background-color: ${({ color }) => color}
`;