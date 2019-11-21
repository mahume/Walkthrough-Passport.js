import styled from 'styled-components/macro';
import { primary } from "../../utils/colorPalette";

export const StyledButton = styled.button`
  width: 122px;
  height: 69px;
  background-color: ${({ light }) => light ? primary.white : primary.blue};
  border-width: 2px;
  border-radius: 15px;
  border-color: ${primary.blue};
  border-style: solid;
  cursor: pointer;
  color: ${({ light }) => light ? primary.blue : primary.white};
  font-size: 22px;
`;