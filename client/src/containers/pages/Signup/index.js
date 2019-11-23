import React from 'react';
import InfoCard from '../../../components/Cards/InfoCard/Card/index';
import CodeCard from '../../../components/Cards/CodeSnippet/Card/index';
import { FullLeftDiv, TopRightDiv, BottomRightDiv } from "../../../styles/gridLayout";

const Signup = () => {
  return (
    <>
      <FullLeftDiv>
        <InfoCard />
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

export default Signup;