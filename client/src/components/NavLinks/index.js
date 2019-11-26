import React from 'react';
import Logo from '../Logo/index';
import Link from '../../Buttons/Link/index';
import { StyledNav, LoginLinksDiv } from './styles';

const Links = () => (
  <StyledNav>
    <Logo />
    <LoginLinksDiv>
      <Link path="/login" theme="light">Login</Link>
      <Link path="/signup">Signup</Link>
    </LoginLinksDiv>
  </StyledNav>
)

export default Links;