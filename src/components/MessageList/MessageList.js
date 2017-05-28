import React from 'react';
import Message from '../Message';
import Card from 'material-ui/Card';
import List from 'material-ui/List';

require('./message-list.scss');

class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        'oi?',
        'oi!'
      ]
    };
  }

  render() {
    let messageComponents = this.state.messages.map(message => {
        return(
          <div className="message-list__item" key={message}>
            <Message message={message} />
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
