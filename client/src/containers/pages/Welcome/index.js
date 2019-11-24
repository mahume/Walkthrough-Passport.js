import React from 'react';
import InfoCard from '../../../components/Cards/InfoCard/Card/index';
import CodeCard from '../../../components/Cards/CodeSnippet/Card/index';
import { FullLeftDiv, TopRightDiv, BottomRightDiv, EntireDiv } from "../../../styles/gridLayout";

const Welcome = () => {
  return (
    <EntireDiv>
      <InfoCard />
    </EntireDiv>
  )
}

export default Welcome;