import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import App from './containers/App/index';
import { GlobalStyles } from './globalStyles';

ReactDOM.render(
  <Router>
    <GlobalStyles />
    <App />
  </Router>,
  document.getElementById('root')
);