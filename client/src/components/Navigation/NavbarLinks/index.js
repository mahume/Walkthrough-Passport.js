import React from 'react';
import Logo from '../../Logo/index'
import LinkButton from '../../Buttons/LinkButton/index';
import { StyledNav, LoginLinksDiv } from "./styles";

const LoginLinks = () => {
  return (
    <StyledNav>
      <Logo />
      <LoginLinksDiv>
        <LinkButton path="/login" theme="light">Login</LinkButton>
        <LinkButton path="/signup">Signup</LinkButton>
      </LoginLinksDiv>
    </StyledNav>
  )
}

export default LoginLinks;