import React from 'react';
import AuthStatusBar from '../../AuthStatusBar/index';
import AuthForm from "../../AuthForm/index";
import { Canvas } from "./AuthCard/styles";

const InfoCard = () => {
  return (
    <Canvas>
      <AuthStatusBar />
      <AuthForm />
    </Canvas>
  )
}

export default InfoCard;