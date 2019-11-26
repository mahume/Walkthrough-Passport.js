import React from 'react';
import { withRouter } from 'react-router-dom';
import StatusSection from '../StatusSection/index';
import MacButtons from '../MacButtons/index';
import { colors } from '../../styles/stylingTemplate';
import { Navbar } from '../../styles/sectionLayout';
import { Canvas } from "./styles";

const StatusBar = ({ location }) => (
  <Canvas>
    <Navbar bgColor={colors.blue}>
      <MacButtons />
    </Navbar>
    <StatusSection 
      bgColor={colors.blue}
      label="Location"
      status={formatLocation(location.pathname)}
    />
    <StatusSection 
      bgColor={colors.red}
      label="Logged In"
      status="False"
    />
  </Canvas>
)

function formatLocation(pathname) {
  switch (pathname) {
    case '/signup':
      return 'Signup Form';
    case '/login':
      return 'Login Form';
    case '/dashboard':
      return 'Dashboard';
    default:
      return 'Welcome Page';
  }
}

export default withRouter(StatusBar);