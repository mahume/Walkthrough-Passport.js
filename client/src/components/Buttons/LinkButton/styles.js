import styled from 'styled-components';
import { Link } from "react-router-dom";
import { colors, grayscale, borderRadius, font } from '../../../styles/stylingTemplate';

const { blue } = colors;
const { white } = grayscale;

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  width: 122px;
  height: 59px;
  text-decoration: none;
  background-color: ${({ theme }) => theme === 'light' ? white : blue};
  border: 2px solid ${blue};
  border-radius: ${borderRadius.sm};
  cursor: pointer;
  color: ${({ theme }) => theme === 'light' ? blue : white};
  font-size: ${font.sm};
`;