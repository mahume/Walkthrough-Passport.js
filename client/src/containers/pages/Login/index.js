import React from 'react';
import { withRouter } from 'react-router-dom';
import StatusBar from '../../../components/StatusBar/index';
import Form from '../../../components/Form/index';
import InfoSection from '../../../components/InfoSection/index';
import CodeCard from '../../../components/CodeCard/index';
import { FullLeftGrid, TopRightGrid, BottomRightGrid } from '../../../styles/gridLayout';
import { Frame, LeftSection, RightSection } from '../../../styles/sectionLayout';

const Login = ({ location }) => (
  <>
    <FullLeftGrid>
      <Frame direction="row">
        <LeftSection>
          <StatusBar pathname={location.pathname} />
        </LeftSection>
        <RightSection>
          <Form pathname={location.pathname} />
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

export default withRouter(Login);