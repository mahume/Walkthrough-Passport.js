import styled from 'styled-components/macro';
import { Link } from "react-router-dom";
import { primary } from "../../utils/colorPalette";

export const StyledButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  width: 122px;
  height: 59px;
  text-decoration: none;
  background-color: ${({ theme }) => theme === 'light' ? primary.white : primary.blue};
  border: 2px solid ${primary.blue};
  border-radius: 15px;
  cursor: pointer;
  color: ${({ theme }) => theme === 'light' ? primary.blue : primary.white};
  font-size: 22px;
`;