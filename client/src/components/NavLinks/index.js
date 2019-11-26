import React from 'react';
import Logo from '../Logo/index';
import LinkButton from '../LinkButton/index';
import { StyledNav, LoginLinksDiv } from './styles';

const NavLinks = () => (
  <StyledNav>
    <Logo />
    <LoginLinksDiv>
      <LinkButton path="/login" theme="light">Login</LinkButton>
      <LinkButton path="/signup">Signup</LinkButton>
    </LoginLinksDiv>
  </StyledNav>
)

export default NavLinks;