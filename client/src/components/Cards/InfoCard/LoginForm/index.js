import React from 'react';
import Input from '../Input/index';
import NavButton from '../../../Buttons/NavButton/index';
import { Canvas, Form, InputsContainer, ButtonContainer } from "./styles";

const LoginForm = ({ pathname }) => {
  return (
    <Canvas>
      <Form action="" method="">
        <InputsContainer>
          <Input 
            htmlFor="email"
            id="email"
            type="text"
            placeholder="your@email.com"
          />
          <Input
            htmlFor="password"
            id="password"
            type="text"
            placeholder="y0urPassw0rd"
          />
        </InputsContainer>
        <ButtonContainer>
          <NavButton>{formatLocation(pathname)}</NavButton>
        </ButtonContainer>
      </Form>
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