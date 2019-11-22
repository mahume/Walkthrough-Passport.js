import React from 'react';
import Logo from '../Logo/index'
import Button from '../Buttons/Button';
import { StyledNav, LoginLinksDiv } from "./styles";

const LoginLinks = () => {
  return (
    <StyledNav>
      <Logo />
      <LoginLinksDiv>
        <Button path="/login" theme="light">Login</Button>
        <Button path="/signup">Signup</Button>
      </LoginLinksDiv>
    </StyledNav>
  )
}

export default LoginLinks;