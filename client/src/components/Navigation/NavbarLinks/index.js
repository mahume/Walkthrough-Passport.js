import React from 'react';
import Logo from '../../Logo/index'
import NavButton from '../../Buttons/NavButton/index';
import { StyledNav, LoginLinksDiv } from "./styles";

const LoginLinks = () => {
  return (
    <StyledNav>
      <Logo />
      <LoginLinksDiv>
        <NavButton path="/login" theme="light">Login</NavButton>
        <NavButton path="/signup">Signup</NavButton>
      </LoginLinksDiv>
    </StyledNav>
  )
}

export default LoginLinks;