import React from 'react';
import { withRouter } from 'react-router-dom';
import CardNavbar from '../../CardNavbar/index';
import StatusSection from '../StatusSection/index';
import { colors } from "../../../../styles/stylingTemplate";
import { Canvas } from "./styles";


const StatusBar = ({ location }) => {

  return (
    <Canvas>
      <CardNavbar bgColor={colors.blue}/>
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
}

function formatLocation(path) {
  switch (path) {
    case '/signup':
      return 'Signup Form'
    case '/login':
      return 'Login Form'
    default:
      return 'Welcome Page';
  }
}

export default withRouter(StatusBar);