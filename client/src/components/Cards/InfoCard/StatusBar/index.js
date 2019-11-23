import React from 'react';
import CardNavbar from '../../CardNavbar/index';
import StatusSection from '../StatusSection/index';
import { colors } from "../../../../styles/stylingTemplate";
import { Canvas } from "./styles";

const StatusBar = () => {
  return (
    <Canvas>
      <CardNavbar bgColor={colors.blue}/>
      <StatusSection 
        bgColor={colors.blue}
        label="Location"
        status="Window"
      />
      <StatusSection 
        bgColor={colors.red}
        label="Logged In"
        status="False"
      />
    </Canvas>
  )
}

export default StatusBar;