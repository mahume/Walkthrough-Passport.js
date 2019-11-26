import React from 'react';
import InfoCard from '../../../components/InfoCard/index';
import CodeCard from '../../../components/CodeCard/index';
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