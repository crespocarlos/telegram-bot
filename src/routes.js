import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Home from './components/Home';
import {Router, Route, Link, browserHistory } from 'react-router';
import PropTypes from 'prop-types';

ReactDOM.render(
<Router history={browserHistory}>
  <Route component={App}>
      <Route path="/" component={Home} />
      <Route path="chat" component={Home}>
          <Route path=":user" component={Home} />
      </Route>
  </Route>
</Router>,
document.getElementById('app'));