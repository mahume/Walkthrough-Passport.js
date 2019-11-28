import React from 'react';
import MacButtons from '../MacButtons/index';
import CodeSnippet from '../CodeSnippet/index';
import { CardNavbar } from '../../styles/sectionLayout';
import { grayscale } from '../../styles/stylingTemplate';
import { Footer } from "./styles";

const CodeCard = () => (
  <>
    <CardNavbar bgColor={grayscale.darkHi}>
      <MacButtons />
    </CardNavbar>
    <CodeSnippet />
    <Footer />
  </>
)

export default CodeCard;