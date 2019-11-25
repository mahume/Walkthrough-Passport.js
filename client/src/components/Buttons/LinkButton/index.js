import React from "react";
import { StyledLink } from "./styles";

const LinkButton = ({ path, theme, children }) => {
  return (
    <StyledLink to={path} theme={theme}>{children}</StyledLink>
  )
}

export default LinkButton;