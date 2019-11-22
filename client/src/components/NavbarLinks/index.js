import React from 'react';
import Logo from '../Logo/index'
import LightButton from '../Buttons/LightButton/index';
import DarkButton from '../Buttons/DarkButton/index';
import { StyledNav, LoginLinksDiv } from "./styles";

const LoginLinks = () => {
  return (
    <StyledNav>
      <Logo />
      <LoginLinksDiv>
        <LightButton path="/login">Login</LightButton>
        <DarkButton path="/signup">Signup</DarkButton>
      </LoginLinksDiv>
    </StyledNav>
  )
}

export default LoginLinks;