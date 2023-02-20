require('dotenv').config();

const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// // Matches "/echo [whatever]"
// bot.onText(/\/echo (.+)/, (msg, match) => {
//     // 'msg' is the received Message from Telegram
//     // 'match' is the result of executing the regexp above on the text content
//     // of the message
//
//     const chatId = msg.chat.id;
//     const resp = match[1]; // the captured "whatever"
//
//     // send back the matched "whatever" to the chat
//     bot.sendMessage(chatId, resp);
// });

// Listen for any kind of message. There are different kinds of
// messages.
bot.onText(/.*/, (msg) => {
    const chatId = msg.chat.title;
    console.log(chatId);
    console.log(`From: ${msg.from.first_name} ${msg.from.last_name}`)
    console.log('message:');
    console.log(msg.text);
    console.log(JSON.stringify(msg));
});

// bot.on('message', (msg) => {
//     console.log('message');
//     const chatId = msg.chat.title;
//     console.log(chatId);
//     console.log(msg.text);
// });