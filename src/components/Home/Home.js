import React from 'react';
import MessageBox from '../MessageBox'; 
import MessageList from '../MessageList';
import ChatList from '../ChatList';

require('./home.scss');

class Home extends React.Component {
    render() {
      return(
        <div className="home">
          <ChatList />
          <div className="home__container">
            
            <MessageList user={this.props.params.user}/>
            <MessageBox />
          </div>
          
        </div>
    )
  }
}

export default Home;