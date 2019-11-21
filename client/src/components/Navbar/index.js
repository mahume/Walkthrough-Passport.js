import React from 'react';
import Logo from '../Logo/index';
import LoginLinks from '../LoginLinks/index';
import { Nav } from "./styles";

const Navbar = () => {
  return (
    <Nav>
      <Logo />
      <LoginLinks />
    </Nav>
  )
}

export default Navbar;