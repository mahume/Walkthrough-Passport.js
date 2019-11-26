import React from 'react';
import { withRouter } from 'react-router-dom';
import { StyledButton } from './styles';

const SubmitButton = ({ theme, location }) => (
  <StyledButton 
    type="submit"
    theme={theme}
  >
    {formatLocation(location.pathname)}
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

export default withRouter(SubmitButton);