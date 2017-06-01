import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import PropTypes from 'prop-types';
import RouteHandler from 'react-router';

require('./app.scss');

injectTapEventPlugin();

class App extends React.Component {
    constructor() {
      super()
    }

    render() {
      return(
        <div className="app">
          {this.props.children}
        </div>
    )
  }
}

export default App;