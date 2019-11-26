import React from 'react';
import { StyledButton } from './styles';

function formatLocation(pathname) {
  switch (pathname) {
    case '/signup':
      return 'Signup'
    default:
      return 'Login';
  }
}

export default Submit = ({ theme, pathname }) => (
  <StyledButton 
    type="submit" 
    theme={theme}
  >
    {formatLocation(pathname)}
  </StyledButton>
)