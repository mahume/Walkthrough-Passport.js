import React from 'react';
import { Line, Number, Text } from "./styles";

const CodeLines = ({ number, code, padding }) => {
  const formattedCode = code.padStart(code.length + padding, '\t');
  return (
    <Line>
      <Number>{number}</Number>
      <Text><pre>{formattedCode}</pre></Text>
    </Line>
  )
}

export default CodeLines;