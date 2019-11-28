import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Input from '../Input/index';
import SubmitButton from '../SubmitButton/index';
import { Canvas, StyledForm, InputsContainer, ButtonContainer } from "./styles";

const initState = {
  email: '',
  password: '',
  confirmedPassword: '',
  emailError: null,
  passwordError: null,
}

const Form = ({ location }) => {
  const [state, setState] = useState(initState)
  const { email, password, confirmedPassword, emailError, passwordError } = state;
  const { pathname } = location;

  const handleSubmit = async e => {
    e.preventDefault();
    
    const resource = `/auth${pathname}`;
    const init = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        email, 
        password, 
        confirmedPassword 
      }),
    }

    try {
      const res = await fetch(resource, init);
      const json = await res.json();
      
      if (!res.ok) {
        const errorKey = Object.keys(json)[0];
        const errorVal = Object.values(json)[0];
        if (errorKey === 'emailError') {
          setState({ ...state, email: '', [errorKey]: errorVal });
        } else if (errorKey === 'passwordError') {
          setState({ ...state, password: '', confirmedPassword: '', [errorKey]: errorVal });
        }
        throw new Error(errorVal);
      } else {
        setState(initState)
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Canvas>
      <StyledForm onSubmit={handleSubmit}>
        <InputsContainer>
          <Input 
            id="email"
            value={email}
            placeholder={emailError || "your@email.com"}
            handleInputChange={e => setState({ ...state, email: e.target.value })}
            error={emailError}
          />
          <Input
            id="password"
            value={password}
            placeholder={passwordError || "y0urPassw0rd"}
            handleInputChange={e => setState({ ...state, password: e.target.value })}
            error={passwordError}
          />
          {pathname === "/signup" &&
            <Input
            id="confirmedPassword"
            value={confirmedPassword}
            placeholder={passwordError || "cOnfirmY0urPassw0rd"}
            handleInputChange={e => setState({ ...state, confirmedPassword: e.target.value })}
            error={passwordError}
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