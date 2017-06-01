import React from 'react';
import {Link} from 'react-router';

class Chat extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div
        containerElement={<Link to={'/chat/' + this.props.user} /> }>
        {this.props.user} 
      </div>
    )
  }
}

export default Chat;