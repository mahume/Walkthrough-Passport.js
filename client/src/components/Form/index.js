import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Input from '../Input/index';
import SubmitButton from '../SubmitButton/index';
import { Canvas, StyledForm, InputsContainer, ButtonContainer } from "./styles";
import { validatePasswords } from '../../utils/functions';

const Form = ({ location }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);

  const handleSubmit = e => {
    e.preventDefault();

    if (validatePasswords(password, confirmedPassword)) {
      fetch(`/auth${location.pathname}`, {
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
    } else {
      console.error('Password mismatch');
      setIsPasswordMatch(false);
    }

    setPassword('');
    setConfirmedPassword('');
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
            placeholder={isPasswordMatch ? "y0urPassw0rd" : "Passwords mismatch"}
            handleInputChange={e => setPassword(e.target.value)}
          />
          {location.pathname === "/signup" &&
            <Input
              id="confirmedPassword"
              value={confirmedPassword}
              placeholder={isPasswordMatch ? "cOnfirmY0urPassw0rd" : "Please try again"}
              handleInputChange={e => setConfirmedPassword(e.target.value)}
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