import React from 'react';
import CardNavbar from '../../CardNavbar/index';
import CodeSnippet from '../CodeSnippet/index';
import { Frame, Footer } from "./styles";

const CodeCard = () => {
  return (
    <Frame>
      <CardNavbar />
      <CodeSnippet />
      <Footer />
    </Frame>
  )
}

export default CodeCard;