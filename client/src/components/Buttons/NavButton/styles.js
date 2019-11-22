import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { colors, grayscale, sizing } from '../../../styles/stylingTemplate';

const { blue } = colors;
const { white } = grayscale;
const { buttonBorderRadius } = sizing;

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  width: 122px;
  height: 59px;
  text-decoration: none;
  background-color: ${({ theme }) => theme === 'light' ? white : blue};
  border: 2px solid ${blue};
  border-radius: ${buttonBorderRadius};
  cursor: pointer;
  color: ${({ theme }) => theme === 'light' ? blue : white};
  font-size: 22px;
`;