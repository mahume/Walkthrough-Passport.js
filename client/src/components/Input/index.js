import React from 'react';
import { InputContainer, StyledInput } from "./styles";
import { grayscale, colors } from '../../styles/stylingTemplate';
const { redMed, redLight } = colors;
const { brightLo, white } = grayscale;

const Input = ({ id, value, placeholder, handleInputChange, error }) => (
  <InputContainer>
    <label htmlFor={id}></label>
    <StyledInput 
      type="text"
      id={id}
      name={id}
      value={value}
      placeholder={placeholder}
      onChange={handleInputChange}
      bgColor={error ? redLight : white}
      color={error ? redMed : brightLo}
    />
  </InputContainer>
)

export default Input;