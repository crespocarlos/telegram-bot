import React from 'react';
import Chat from '../Chat'
import io from 'socket.io-client';

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
        <div className="chat-list-card--empty">
          <div>
            Nobody yet
          </div>
            
        </div>
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
      <div className="chat-list-card">
        <div>
          {chatNodes}
        </div>
      </div>
    )
  }
}

export default ChatList;