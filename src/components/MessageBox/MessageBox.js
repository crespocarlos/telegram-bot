import React from 'react';
import trim from 'trim';
import io from 'socket.io-client';
import Chat from '../../services/chat'

require('./message-box.scss');

const socket = io();

class MessageBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      message: ''
    };
  }

  onChange(evt){
    this.setState({
        message: evt.target.value
    });
  }

  onKeyUp(evt){
   if(evt.keyCode === 13 && trim(evt.target.value) != ''){
      evt.preventDefault();

      this.setState({message: evt.target.value})
      var message = {
        message: {
          chat: {
            id: 90887372,
            username: "carloscrespo"
          },
          from: {
            username: "carloscrespo"
          },
          text:  evt.target.value

        }
      };

      let chat = new Chat();
      chat.sendMessage(message);

      this.setState({
          message: ''
      });
    }
  }

  render() {
    return(
      <div className="messagebox-card">
          <textarea 
            className="messagebox-card__text" 
            value={this.state.message} 
            onChange={this.onChange.bind(this)} 
            onKeyUp={this.onKeyUp.bind(this)}>
          </textarea>
      </div>
    )
  }
}

export default MessageBox;