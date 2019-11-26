import React from 'react';
import StatusBar from '../../../components/StatusBar/index';
import Form from '../../../components/Form/index';
import InfoSection from '../../../components/InfoSection/index';
import CodeCard from '../../../components/CodeCard/index';
import { FullLeftGrid, TopRightGrid, BottomRightGrid } from '../../../styles/gridLayout';
import { Frame, LeftSection, RightSection } from '../../../styles/sectionLayout';

const Signup = () => (
  <>
    <FullLeftGrid>
      <Frame>
        <LeftSection>
          <StatusBar />
        </LeftSection>
        <RightSection>
          <Form />
          <InfoSection />
        </RightSection>
      </Frame>
    </FullLeftGrid>
    <TopRightGrid>
      <Frame direction="column">
        <CodeCard />
      </Frame>
    </TopRightGrid>
    <BottomRightGrid>
      <Frame direction="column">
        <CodeCard />
      </Frame>
    </BottomRightGrid>
  </>
)

export default Signup;