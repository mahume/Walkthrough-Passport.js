import React from 'react';
import CardNavbar from '../CardNavbar/index';
import CodeSnippet from '../CodeSnippet/index';
import { Frame, Footer } from "./styles";

const CodeCard = () => (
  <Frame>
    <CardNavbar />
    <CodeSnippet />
    <Footer />
  </Frame>
)

export default CodeCard;