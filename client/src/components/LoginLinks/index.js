import React from 'react';
import Button from '../Button/index';
import { StyledNav } from "./styles";

const LoginLinks = () => {
  return (
    <StyledNav>
      <Button light>Login</Button>
      <Button>Signup</Button>
    </StyledNav>
  )
}

export default LoginLinks;