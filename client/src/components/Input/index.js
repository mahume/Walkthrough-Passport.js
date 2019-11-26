import React from 'react';
import { InputContainer, StyledInput } from "./styles";

const Input = ({ id, value, placeholder, handleInputChange }) => (
  <InputContainer>
    <label htmlFor={id}></label>
    <StyledInput 
      type="text"
      id={id}
      name={id}
      value={value}
      placeholder={placeholder}
      onChange={handleInputChange}
      required
    />
  </InputContainer>
)

export default Input;