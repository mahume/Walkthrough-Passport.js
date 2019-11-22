import React from "react";
import { StyledLink } from "./styles";

const LightButton = ({ children, path }) => {
  return (
    <StyledLink to={path}>{children}</StyledLink>
  )
}

export default LightButton;