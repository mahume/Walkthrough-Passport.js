import React from 'react';
import { withRouter } from 'react-router-dom';
import StatusSection from '../StatusSection/index';
import MacButtons from '../MacButtons/index';
import { colors } from '../../styles/stylingTemplate';
import { CardNavbar } from '../../styles/sectionLayout';
import { Canvas } from "./styles";

const StatusBar = ({ location }) => (
  <Canvas>
    <CardNavbar bgColor={colors.blue}>
      <MacButtons />
    </CardNavbar>
    <StatusSection 
      bgColor={colors.blue}
      label="Location"
      status={formatLocation(location.pathname)}
    />
    <StatusSection 
      bgColor={colors.redMid}
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