import React from 'react';
import Chat from '../Chat'
import Card from 'material-ui/Card';
import List from 'material-ui/List';
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
        <Card className="chat-list-card--empty">
          <div>
            Nobody yet
          </div>
            
        </Card>
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
      <Card className="chat-list-card">
        <List>
          {chatNodes}
        </List>
      </Card>
    )
  }
}

export default ChatList;