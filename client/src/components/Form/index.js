import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Input from '../Input/index';
import SubmitButton from '../SubmitButton/index';
import { Canvas, StyledForm, InputsContainer, ButtonContainer } from "./styles";

const validatePasswords = ({ password, passwordConfirmed}) => {
  return password.trim() !== passwordConfirmed.trim() ? false : true;
}

const Form = ({ location }) => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    passwordConfirmed: '',
  })
  const { email, password, passwordConfirmed } = inputs;

  const handleSubmit = e => {
    e.preventDefault();
    validatePasswords({ password, passwordConfirmed });

    fetch(`/auth${location.pathname}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        email, 
        password,
        pathname: location.pathname,
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

    setInputs({
      email: '',
      password: '',
      passwordConfirmed: '',
    })
  }

  return (
    <Canvas>
      <StyledForm onSubmit={handleSubmit}>
        <InputsContainer>
          <Input 
            id="email"
            value={email}
            placeholder="your@email.com"
            handleInputChange={e => {
              setInputs({
                ...inputs, 
                email: e.target.value 
              })
            }}
          />
          <Input
            id="password"
            value={password}
            placeholder="y0urPassw0rd"
            handleInputChange={e => {
              setInputs({
                ...inputs,
                password: e.target.value 
              })
            }}
          />
          {location.pathname === "/signup" &&
            <Input
              id="confirm"
              value={passwordConfirmed}
              placeholder="cOnfirmY0urPassw0rd"
              handleInputChange={e => {
                setInputs({
                  ...inputs,
                  passwordConfirmed: e.target.value 
                })
              }}
            />
          }
        </InputsContainer>
        <ButtonContainer>
          <SubmitButton />
        </ButtonContainer>
      </StyledForm>
    </Canvas>
  )
}

export default withRouter(Form);