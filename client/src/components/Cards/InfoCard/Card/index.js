import React from 'react';
import { withRouter } from 'react-router-dom';
import StatusBar from '../StatusBar/index';
import LoginForm from '../LoginForm/index';
import { Frame } from "./styles";

const InfoCard = ({ location }) => {
  return (
    <Frame>
      <StatusBar pathname={location.pathname} />
      <LoginForm pathname={location.pathname} />
    </Frame>
  )
}

export default withRouter(InfoCard);