import React from 'react';
import Button from '../Button/index';
import { StyledNav } from "./styles";

const LoginLinks = () => {
  return (
    <StyledNav>
      <Button path="/login" theme="light">Login</Button>
      <Button path="/signup">Signup</Button>
    </StyledNav>
  )
}

export default LoginLinks;