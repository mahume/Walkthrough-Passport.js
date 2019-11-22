import styled from 'styled-components/macro';

export const ButtonContainer = styled.div`
  height: 20px;
  width: 60px;
  margin-left: 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.div`
  height: 15px;
  width: 15px;
  border-radius: 100%;
  background-color: ${({ color }) => color}
`;