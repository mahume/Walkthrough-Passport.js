import React from 'react';
import StatusBar from '../../../components/StatusBar/index';
import Form from '../../../components/Form/index';
import InfoSection from '../../../components/InfoSection/index';
import { FullGrid } from '../../../styles/gridLayout';
import { Frame, LeftSection, RightSection } from "../../../styles/sectionLayout";

const Welcome = () => (
  <FullGrid>
    <Frame>
      <LeftSection>
        <StatusBar />
      </LeftSection>
      <RightSection>
        <Form />
        <InfoSection />
      </RightSection>
    </Frame>
  </FullGrid>
)

export default Welcome;