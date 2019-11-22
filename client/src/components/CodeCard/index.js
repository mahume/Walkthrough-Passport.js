import React from 'react';
import MacButtons from "../MacButtons/index";
import { Canvas, TopBar } from "./styles";

const CodeCard = () => {
  return (
    <Canvas>
      <TopBar>
        <MacButtons />
      </TopBar>
    </Canvas>
  )
}

export default CodeCard;