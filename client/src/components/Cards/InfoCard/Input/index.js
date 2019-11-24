import React from 'react';
import { InputContainer, StyledInput } from "./styles";

const Input = ({ htmlFor, id, type, placeholder, value, handleChange }) => {
  return (
    <InputContainer>
      <label htmlFor={htmlFor}></label>
      <StyledInput 
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
      />
    </InputContainer>
  )
}

export default Input;