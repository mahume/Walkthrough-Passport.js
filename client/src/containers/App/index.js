import React from 'react';
import Navbar from '../../components/Navbar/index';
import { FlexContainer } from "./styles";

const App = () => {
  return (
    <FlexContainer>
      <Navbar />
      <h1>Hello World</h1>
    </FlexContainer>
  )
}

export default App;
