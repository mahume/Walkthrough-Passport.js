import React from 'react';
import InfoCard from '../../../components/InfoCard/index';
import CodeCard from '../../../components/CodeCard/index';

const Welcome = () => {
  return (
    <>
      <InfoCard />
      <CodeCard />
      <CodeCard position="bottom" />
    </>
  )
}

export default Welcome;