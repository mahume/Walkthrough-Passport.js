import React, { useState } from 'react';
import Input from '../Input/index';
import FormButton from '../../../Buttons/FormButton/index';
import { Canvas, Form, InputsContainer, ButtonContainer } from "./styles";

const LoginForm = ({ pathname }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    
    // TODO: Clear inputs
  }

  return (
    <Canvas>
      <Form action="" method="" onSubmit={handleSubmit}>
        <InputsContainer>
          <Input 
            id="email"
            value={email}
            placeholder="your@email.com"
            handleInputChange={e => setEmail(e.target.value)}
          />
          <Input
            id="password"
            value={password}
            placeholder="y0urPassw0rd"
            handleInputChange={e => setPassword(e.target.value)}
          />
        </InputsContainer>
        <ButtonContainer>
          <FormButton pathname={pathname} />
        </ButtonContainer>
      </Form>
    </Canvas>
  )
}

export default LoginForm;