import React from 'react';
import InfoCard from '../../../components/InfoCard/index';
import CodeCard from '../../../components/CodeCard/index';
import { LeftDiv, TopRightDiv, BottomRightDiv } from "./styles";
const Welcome = () => {
  return (
    <>
      <LeftDiv>
        <InfoCard />
      </LeftDiv>
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