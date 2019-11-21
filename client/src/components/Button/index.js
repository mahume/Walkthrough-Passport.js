import React from "react";
import { StyledButton } from "./styles";

const Button = ({ children, light }) => {
  return (
    <StyledButton light={light}>{children}</StyledButton>
  )
}

export default Button;