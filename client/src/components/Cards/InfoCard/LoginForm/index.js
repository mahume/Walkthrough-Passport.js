import React, { useState } from 'react';
import Input from '../Input/index';
import FormButton from '../../../Buttons/FormButton/index';
import { Canvas, Form, InputsContainer, ButtonContainer } from "./styles";

const LoginForm = ({ pathname }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log(email, password);
  }

  return (
    <Canvas>
      <Form action="" method="">
        <InputsContainer>
          <Input 
            htmlFor="email"
            id="email"
            type="text"
            placeholder="your@email.com"
            value={email}
            handleChange={e => setEmail(e.target.value)}
          />
          <Input
            htmlFor="password"
            id="password"
            type="text"
            placeholder="y0urPassw0rd"
            value={password}
            handleChange={e => setPassword(e.target.value)}
          />
        </InputsContainer>
        <ButtonContainer>
          <FormButton
            type="submit"
            handleSubmit={handleSubmit}
            pathname={pathname}
          />
        </ButtonContainer>
      </Form>
    </Canvas>
  )
}

export default LoginForm;