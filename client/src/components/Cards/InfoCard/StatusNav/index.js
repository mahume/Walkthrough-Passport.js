import React from 'react';
import CardNavbar from '../../CardNavbar/index';
import StatusSection from '../StatusSection/index';
import { colors } from "../../../../styles/stylingTemplate";
import { Canvas } from "./styles";


const StatusNav = ({ pathname }) => {
  return (
    <Canvas>
      <CardNavbar bgColor={colors.blue}/>
      <StatusSection 
        bgColor={colors.blue}
        label="Location"
        status={formatLocation(pathname)}
      />
      <StatusSection 
        bgColor={colors.red}
        label="Logged In"
        status="False"
      />
    </Canvas>
  )
}

function formatLocation(pathname) {
  switch (pathname) {
    case '/signup':
      return 'Signup Form'
    case '/login':
      return 'Login Form'
    default:
      return 'Welcome Page';
  }
}

export default StatusNav;