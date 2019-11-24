import React from "react";
import { StyledButton } from "./styles";

const Button = ({ type, theme, handleSubmit, pathname }) => {
  return (
    <StyledButton 
      type={type} 
      theme={theme}
      onSubmit={handleSubmit}
    >
      {formatLocation(pathname)}
    </StyledButton>
  )
}

function formatLocation(pathname) {
  switch (pathname) {
    case '/signup':
      return 'Signup'
    default:
      return 'Login';
  }
}

export default Button;