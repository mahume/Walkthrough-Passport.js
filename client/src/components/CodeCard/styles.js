import styled from 'styled-components/macro';

export const StyledDiv = styled.div`
  border: 1px solid gray;

  grid-column: 3 / 4;
  grid-row-start: ${({ position }) => position === 'bottom' ? 3 : 2 };
  grid-row-end: ${({ position }) => position === 'bottom' ? 4 : 3 };
`;