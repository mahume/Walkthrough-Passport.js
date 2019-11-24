import React from 'react';
import NavButton from '../../../Buttons/NavButton/index';
import { Canvas, StyledForm, StyledInputDiv, StyledInput } from "./styles";

const LoginForm = ({ pathname }) => {
  return (
    <Canvas>
      <StyledForm action="" method="">
        <StyledInputDiv>
          <label htmlFor="email">Email</label>
          <StyledInput id="email" type="text"/>
          <label htmlFor="password">Password</label>
          <StyledInput id="password" type="text"/>
        </StyledInputDiv>
        <NavButton>{formatLocation(pathname)}</NavButton>
      </StyledForm>
    </Canvas>
  )
}

function formatLocation(pathname) {
  switch (pathname) {
    case '/signup':
      return 'Signup'
    default:
      return 'Login';
  }
}

export default LoginForm;