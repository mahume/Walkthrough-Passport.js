import React from 'react';
import CodeLine from '../CodeLine/index';
import { StyledBody } from './styles';

const testData = [
  'The is a test',
  'Still a test',
]

const CodeSnippet = () => {
  return (
    <StyledBody>
      {
        testData.map((text, index) => (
          <CodeLine key={index} number={index + 1} text={text} />
        ))
      }
    </StyledBody>
  )
}

export default CodeSnippet;