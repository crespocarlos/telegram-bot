import React from 'react';
import Card from 'material-ui/Card';
require('./message-box.scss');

class MessageBox extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <Card className="messagebox-card">
          <textarea className="messagebox-card__text">
          </textarea>
      </Card>
    )
  }
}

export default MessageBox;