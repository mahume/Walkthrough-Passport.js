import React, { useState } from 'react';
import Input from '../../Input/index';
import Submit from '../../Buttons/Submit';
import { Canvas, Form, InputsContainer, ButtonContainer } from "./styles";

const Login = ({ pathname }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    
    fetch(`/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        email, 
        password,
      }),
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject('Some sort of error')
        }
      })
      .then(data => console.log(data))
      .catch(err => console.error(err))

    // TODO: Clear inputs
  }

  return (
    <Canvas>
      <Form onSubmit={handleSubmit}>
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
          <Submit pathname={pathname} />
        </ButtonContainer>
      </Form>
    </Canvas>
  )
}

export default Login;