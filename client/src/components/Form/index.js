import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Input from '../Input/index';
import SubmitButton from '../SubmitButton/index';
import { grayscale, colors } from '../../styles/stylingTemplate';
import { Canvas, StyledForm, InputsContainer, ButtonContainer } from "./styles";

const Form = ({ location }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [isError, setIsError] = useState(null);
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
        setIsError(json.error);
        throw new Error(json.error);
      }
      console.log(json);
    } catch (error) {
      console.error(error);
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
            bgColor={isError ? grayscale.white : grayscale.white}
            color={isError ? grayscale.brightLo : colors.brightLo}
          />
          <Input
            id="password"
            value={password}
            placeholder={isError ? "y0urPassw0rd" : "Passwords mismatch"}
            handleInputChange={e => setPassword(e.target.value)}
            bgColor={!isError ? grayscale.white : colors.redLight}
            color={!isError ? grayscale.brightLo : colors.redMid}
            />
          {location.pathname === "/signup" &&
            <Input
            id="confirmedPassword"
            value={confirmedPassword}
            placeholder={isError ? "cOnfirmY0urPassw0rd" : "Please try again"}
            handleInputChange={e => setConfirmedPassword(e.target.value)}
            bgColor={!isError ? grayscale.white : colors.redLight}
            color={!isError ? grayscale.brightLo : colors.redMid}
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