import React from 'react';
import { Line, Number, Text } from "./styles";

const LineNumbers = ({ text, number }) => {
  return (
    <Line>
      <Number>{number}</Number>
      <Text>{text}</Text>
    </Line>
  )
}

export default LineNumbers;