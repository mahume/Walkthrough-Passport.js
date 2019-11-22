import React from 'react';
import AuthCard from '../../../components/AuthCard/index';
import CodeCard from '../../../components/CodeCard/index';
import { FullLeftDiv, TopRightDiv, BottomRightDiv } from "../../../styles/gridLayout";

const Welcome = () => {
  return (
    <>
      <FullLeftDiv>
        <AuthCard />
      </FullLeftDiv>
      <TopRightDiv>
        <CodeCard />
      </TopRightDiv>
      <BottomRightDiv>
        <CodeCard />
      </BottomRightDiv>
    </>
  )
}

export default Welcome;