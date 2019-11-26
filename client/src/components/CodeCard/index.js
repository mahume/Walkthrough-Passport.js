import React from 'react';
import MacButtons from '../MacButtons/index';
import CodeSnippet from '../CodeSnippet/index';
import { Navbar } from '../../styles/sectionLayout';
import { grayscale } from '../../styles/stylingTemplate';
import { Footer } from "./styles";

const CodeCard = () => (
  <>
    <Navbar bgColor={grayscale.darkHi}>
      <MacButtons />
    </Navbar>
    <CodeSnippet />
    <Footer />
  </>
)

export default CodeCard;