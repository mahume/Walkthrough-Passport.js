import React from 'react';
import InfoCard from '../../../components/Cards/InfoCard/Card/index';
import CodeCard from '../../../components/Cards/CodeCard/Card/index';
import { FullLeftDiv, TopRightDiv, BottomRightDiv } from '../../../styles/gridLayout';

const Login = () => (
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

export default Login;