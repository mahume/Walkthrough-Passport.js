import React from 'react';
import MacButtons from "../Buttons/MacButtons/index";
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