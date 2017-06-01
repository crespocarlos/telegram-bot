import Chat from '../services/chat'

const sendMessage = (req, res) => {
  let chat = new Chat('http://localhost:3000');

  chat.sendMessage(req.body, res);

}

export default sendMessage;