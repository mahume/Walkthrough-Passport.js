import React, { useState } from 'react';
import Input from '../Input/index';
import SubmitButton from '../SubmitButton/index';
import { Canvas, StyledForm, InputsContainer, ButtonContainer } from "./styles";

const Form = ({ pathname }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmed, setPasswordConfirmed] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    
    fetch(`/auth${pathname}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        email, 
        password,
        pathname,
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
      <StyledForm onSubmit={handleSubmit}>
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
          {pathname === "/signup" &&
            <Input
              id="confirm"
              value={passwordConfirmed}
              placeholder="cOnfirmY0urPassw0rd"
              handleInputChange={e => setPasswordConfirmed(e.target.value)}
            />
          }
        </InputsContainer>
        <ButtonContainer>
          <SubmitButton pathname={pathname} />
        </ButtonContainer>
      </StyledForm>
    </Canvas>
  )
}

export default Form;