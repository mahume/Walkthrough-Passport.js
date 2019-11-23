import React from "react";
import { StyledLink } from "./styles";

const NavButton = ({ children, path, theme }) => {
  return (
    <StyledLink to={path} theme={theme}>{children}</StyledLink>
  )
}

export default NavButton;