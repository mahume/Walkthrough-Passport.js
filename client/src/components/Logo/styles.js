import styled from 'styled-components/macro';
import { Link } from "react-router-dom";
import { grayscale } from '../../styles/stylingTemplate';

export const StyledLink = styled(Link)`
  font-size: 32px;
  text-decoration: none;
  color: ${grayscale.darkLo}
`;