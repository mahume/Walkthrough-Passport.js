import React from 'react';
import { Switch, Route } from "react-router-dom";
import Navbar from '../../components/Navbar/index';
import Welcome from '../pages/Welcome/index';
import Login from '../pages/Login/index';
import Signup from '../pages/Signup/index';
import Dashboard from '../pages/Dashboard/index';
import { FlexContainer, GridContainer } from "./styles";

const App = () => {
  return (
    <FlexContainer>
      <Navbar />
      <GridContainer>
        <Switch>
          <Route path="/" component={Welcome} exact />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/Dashboard" component={Dashboard} />
        </Switch>
      </GridContainer>
    </FlexContainer>
  )
}

export default App;
