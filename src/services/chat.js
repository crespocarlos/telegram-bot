import io from 'socket.io-client'
import Telegram from './telegram';


export default class Chat {

  constructor(server) {
    this.socket = io(server);
  }

   _respondTo(chatId, res) {
    let telegram = new Telegram()

    telegram.sendMessage(chatId, 'olá, você!')
    .then(response => {
      console.log(response);
      this.socket.emit('sendMessage', response.data.result);  
      console.log('Enviada!');

      if (res) {
        res.sendStatus(200);
      }
      
    
    })
    .catch(err => {
      console.log('Error :', err)

      if (res) {
        res.sendStatus(200);
      }
    });
  }

  sendMessage(req, res) {
    let {message} = req;

    console.log(req);
    console.log(message);

    this.socket.emit('chatInit', message);  
    this.socket.emit('sendMessage', message);  
    this._respondTo(message.chat.id, res);
  }
}