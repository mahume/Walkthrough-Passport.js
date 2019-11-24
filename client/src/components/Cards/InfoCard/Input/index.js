import React from 'react';
import { InputContainer, StyledInput } from "./styles";

const Input = ({ htmlFor, id, type, placeholder }) => {
  return (
    <InputContainer>
      <label htmlFor={htmlFor}></label>
      <StyledInput 
        id={id}
        type={type}
        placeholder={placeholder}
        required
      />
    </InputContainer>
  )
}

export default Input;