import React from 'react';
import Message from '../Message';
import Card from 'material-ui/Card';
import List from 'material-ui/List';
import io from 'socket.io-client';
import _ from 'lodash';

require('./message-list.scss');

const socket = io();

class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };

    socket.on('receiveMessage', (payload) => {   
      this.updateCodeFromSockets(payload);
    });

  }

  updateCodeFromSockets(payload) {
    this.state.messages.push(payload);
    this.setState({messages: this.state.messages})
  }

  componentWillReceiveProps(nextProps) {  
    socket.emit('chat', {username: nextProps.user});
  }

  componentWillUnmount() {  
    socket.emit('leaveChat', {
      username: this.props.username
    })
  }

  render() {
    let messageComponents = _.values(this.state.messages).map(message => {
        return(
          <div className={"message-list__item" + (this.props.user == message.from.username ? '--left': '--right')} key={message.message_id}>
            <Message message={message.text} />
          </div>
        );
    });

    return (
      <Card className="message-list">
        <List>
            {messageComponents}
        </List>
      </Card>
    )
  }
}

export default MessageList;
