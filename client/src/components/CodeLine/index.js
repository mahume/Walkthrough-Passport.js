import React from 'react';
import { Line, Number, Text } from "./styles";

const CodeLines = ({ text, number }) => (
  <Line>
    <Number>{number}</Number>
    <Text>{text}</Text>
  </Line>
)

export default CodeLines;