import styled from 'styled-components/macro';

export const StyledDiv = styled.div`
  height: 40px;
  width: 100%;
  background-color: ${({ bgColor }) => bgColor ? bgColor : 'transparent'};
  border-top-left-radius: inherit;

  display: flex;
  align-items: center;
`;