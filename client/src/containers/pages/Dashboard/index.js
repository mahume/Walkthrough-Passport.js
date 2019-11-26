import React from 'react';
import { withRouter } from 'react-router-dom';
import StatusBar from '../../../components/StatusBar/index';
import Form from '../../../components/Form/index';
import InfoSection from '../../../components/InfoSection/index';
import { FullGrid } from '../../../styles/gridLayout';
import { Frame, LeftSection, RightSection } from "../../../styles/sectionLayout";

const Dashboard = ({ location }) => (
  <FullGrid>
    <Frame direction="row">
      <LeftSection>
        <StatusBar pathname={location.pathname} />
      </LeftSection>
      <RightSection>
        <Form pathname={location.pathname} />
        <InfoSection />
      </RightSection>
    </Frame>
  </FullGrid>
)

export default withRouter(Dashboard);