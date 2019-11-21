import React from 'react';
import LoginLinks from '../LoginLinks/index';
import { Nav } from "./styles";

const Navbar = () => {
  return (
    <Nav>
      <h1>Logo</h1>
      <LoginLinks />
    </Nav>
  )
}

export default Navbar;