import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Home from './components/Home';
import {Router, Route, Link, browserHistory } from 'react-router';
import PropTypes from 'prop-types';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

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