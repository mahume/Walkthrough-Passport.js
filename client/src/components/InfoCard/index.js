import React from 'react';
import MacButtons from "../../components/MacButtons/index";
import { Canvas, StatusBar, Steps } from "./styles";

const InfoCard = () => {
  return (
    <Canvas>
      <StatusBar>
        <MacButtons />
      </StatusBar>
      <Steps />
    </Canvas>
  )
}

export default InfoCard;