import React from 'react';
import {Link} from 'react-router';
import {Panel} from 'react-bootstrap';

class Chat extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Panel>
        <Link to={'/chat/' + this.props.user}>
        {this.props.user} 
        </Link>
      </Panel>
    )
  }
}

export default Chat;