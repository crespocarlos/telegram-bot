import React from 'react';
import Chat from '../Chat'
import io from 'socket.io-client';
import {ListGroup, ListGroupItem} from 'react-bootstrap'

require('./chat-list.scss');

const socket = io();

class ChatList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      users: []
    }

    socket.on('receiveUser', (payload) => {   
      this.updateCodeFromSockets(payload);
    });
  }

  updateCodeFromSockets(payload) {
    if (this.state.users.indexOf(payload.from.username)) {
      
      this.state.users.push(payload.from.username);
      this.setState({users: this.state.users});
    }
    
  }

  render() {
    if(!this.state.users.length){
      return(
        <ListGroup componentClass="div" bsClass="chat-list-card--empty">
          <ListGroupItem bsStyle="success">
            Nobody yet
          </ListGroupItem>
            
        </ListGroup>
      )
    }

    var chatNodes = _.values(this.state.users).map((user) => {
      return (

        <div key={user}>
          <Chat user={user} />
        </div>
      );
    });

    return (
      <ListGroup componentClass="div" bsClass="chat-list-card">
        <ListGroupItem bsStyle="success">
          {chatNodes}
        </ListGroupItem>
      </ListGroup>
    )
  }
}

export default ChatList;