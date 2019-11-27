import React from 'react';
import { InputContainer, StyledInput } from "./styles";
import { grayscale, colors } from '../../styles/stylingTemplate';
const { redMed } = colors;

const Input = ({ id, value, placeholder, handleInputChange, bgColor, color }) => (
  <InputContainer>
    <label htmlFor={id}></label>
    <StyledInput 
      type="text"
      id={id}
      name={id}
      value={value}
      placeholder={placeholder}
      onChange={handleInputChange}
      bgColor={bgColor}
      color={color}
    />
  </InputContainer>
)

export default Input;