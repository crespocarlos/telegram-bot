import React from 'react';
import {ListItem} from 'material-ui/List';
import {Link} from 'react-router';

class Chat extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <ListItem
        containerElement={<Link to={'/chat/' + this.props.user} /> }>
        {this.props.user} 
      </ListItem>
    )
  }
}

export default Chat;