import React from 'react';
import CodeCard from '../../../components/Cards/CodeSnippet/Card/index';
import { FullLeftDiv, TopRightDiv, BottomRightDiv } from "../../../styles/gridLayout";

const Welcome = () => {
  return (
    <>
      <FullLeftDiv>
        <CodeCard />
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