import React from 'react';
import { withRouter } from 'react-router-dom';
import StatusNav from '../StatusNav/index';
import Form from '../Form/index';
import InfoSection from '../InfoSection/index';
import { Frame, LeftSection, RightSection } from "./styles";

const InfoCard = ({ location }) => {
  return (
    <Frame>
      <LeftSection>
        <StatusNav pathname={location.pathname} />
      </LeftSection>
      <RightSection>
        <Form pathname={location.pathname} />
        <InfoSection />
      </RightSection>
    </Frame>
  )
}

export default withRouter(InfoCard);