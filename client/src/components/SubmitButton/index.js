import React from 'react';
import { StyledButton } from './styles';

const SubmitButton = ({ theme, pathname }) => (
  <StyledButton 
    type="submit"
    theme={theme}
  >
    {formatLocation(pathname)}
  </StyledButton>
)

function formatLocation(pathname) {
  switch (pathname) {
    case '/signup':
      return 'Signup'
    default:
      return 'Login';
  }
}

export default SubmitButton;