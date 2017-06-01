import axios from 'axios';

export default class Telegram {

  //separar em outro projeto, para ser deployado. webhook (para o telegram) + websocket (para o react)
  _request(endpoint, args) {

    var http = axios.create({
      baseURL: 'https://api.telegram.org/bot387828909:AAGp5QdjcaCjV8mOh26CmqCoo2uk-mafGUo/',
    });

    return http.post(endpoint, args);

    // curl -F "url=https://telegram-bot-teaeueivjx.now.sh/talktome"  https://api.telegram.org/bot387828909:AAGp5QdjcaCjV8mOh26CmqCoo2uk-mafGUo/setWebhook
    
  }

  sendMessage(chatId, text) {
    let args = {
      chat_id: chatId,
      text: text
    };

    return this._request('/sendMessage', args);
  }
}