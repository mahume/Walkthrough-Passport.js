import React from "react";
import CardNavbar from '../CardNavbar/index'
import { Frame } from "./styles";

const CardFrame = ({ bgColor }) => {
  return (
    <Frame bgColor={bgColor}>
      <CardNavbar />
    </Frame>
  )
}

export default CardFrame;