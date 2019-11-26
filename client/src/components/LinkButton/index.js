import React from "react";
import { StyledLink } from "./styles";

const Link = ({ path, theme, children }) => (
  <StyledLink to={path} theme={theme}>{children}</StyledLink>
)

export default Link;