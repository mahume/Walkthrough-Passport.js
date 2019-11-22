import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from '../../components/Navigation/Navbar/index';
import Welcome from '../pages/Welcome/index';
import Login from '../pages/Login/index';
import Signup from '../pages/Signup/index';
import Dashboard from '../pages/Dashboard/index';
import { AppContainer, PagesContainer } from "./styles";

const App = () => {
  return (
    <AppContainer>
      <Navbar />
      <PagesContainer>
        <Switch>
          <Route path="/" component={Welcome} exact />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/Dashboard" component={Dashboard} />
        </Switch>
      </PagesContainer>
    </AppContainer>
  )
}

export default App;