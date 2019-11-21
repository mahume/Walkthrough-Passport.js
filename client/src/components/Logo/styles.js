import styled from 'styled-components/macro';
import { Link } from "react-router-dom";
import { grays } from "../../utils/colorPalette";

export const StyledLink = styled(Link)`
  font-size: 32px;
  text-decoration: none;
  color: ${grays.dark}
`;