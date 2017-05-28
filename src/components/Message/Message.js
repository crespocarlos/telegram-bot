import React from 'react';
import {ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

class Message extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <ListItem leftAvatar={<Avatar src="https://secure.gravatar.com/avatar/00d48f906597d5e50629ca6bc9cc55f0" />}>
        {this.props.message}
      </ListItem>
    )
  }
}

export default Message