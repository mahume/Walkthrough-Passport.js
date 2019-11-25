import React from 'react';
import { withRouter } from 'react-router-dom';
import StatusNav from '../StatusNav/index';
import LoginForm from '../LoginForm/index';
import InfoSection from '../InfoSection/index';
import { Frame, LeftSection, RightSection } from "./styles";

const InfoCard = ({ location }) => {
  return (
    <Frame>
      <LeftSection>
        <StatusNav pathname={location.pathname} />
      </LeftSection>
      <RightSection>
        <LoginForm pathname={location.pathname} />
        <InfoSection />
      </RightSection>
    </Frame>
  )
}

export default withRouter(InfoCard);