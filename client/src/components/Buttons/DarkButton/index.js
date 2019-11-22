import React from "react";
import { StyledLink } from "./styles";

const DarkButton = ({ children, path }) => {
  return (
    <StyledLink to={path}>{children}</StyledLink>
  )
}

export default DarkButton;