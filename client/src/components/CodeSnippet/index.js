import React from 'react';
import CodeLine from '../CodeLine/index';
import appCode from '../../utils/appCode';
import { StyledBody } from './styles';

const CodeSnippet = () => (
  <StyledBody>
    {
      appCode.map((line, index) => {
        const { code, padding } = line;
        
        return (
          <CodeLine 
            key={index} 
            number={++index} 
            code={code}
            padding={padding}
          />
        )
      })
    }
  </StyledBody>
)

export default CodeSnippet;