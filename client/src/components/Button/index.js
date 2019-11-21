import React from "react";
import { StyledButton } from "./styles";

const Button = ({ children, path, theme }) => {
  return (
    <StyledButton 
      to={path} 
      theme={theme}
    >
      {children}
    </StyledButton>
  )
}

export default Button;