import React from 'react';
import AppWindowNav from '../AppWindowNav/index';
import { Canvas } from "./styles";
import { colors } from "../../styles/stylingTemplate";

const StatusBar = () => {
  return (
    <Canvas>
      <AppWindowNav bgColor={colors.blue} />
    </Canvas>
  )
}

export default StatusBar;