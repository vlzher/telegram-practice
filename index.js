const TelegramApi = require('node-telegram-bot-api');
const {gameOptions, againOptions} = require('./options')
const token = '5406953490:AAEx1D5xuGSMwVs38wrvPLTo6FpFVhlbdrU';

const bot = new TelegramApi(token, {polling: true})

const nums = {}



bot.setMyCommands([
    {command: '/start', description: 'Start'},
    {command: '/info', description: 'Information'},
    {command: '/game', description: "Zgadnij liczbe od 1 do 10"},
    ]
)

const startGame = async (chatId) => {
    await bot.sendMessage(chatId, 'Chuju zgadnij liczbe od 1 do 10');
    nums[chatId] = Math.floor(Math.random() * 10) + 1;
    await bot.sendMessage(chatId,"Choose the number ",gameOptions)
}

bot.on('message', async msg => {
    const text = msg.text;
    const chatId = msg.chat.id;
    const username = msg.from.first_name+" "+msg.from.last_name;
    if(text === '/start'){
        await bot.sendAnimation(chatId, 'https://c.tenor.com/d01fjPpMXhEAAAAM/jablonowski-jaszczur-jablon-osadowski-olszanski.gif')
        return await bot.sendMessage(chatId,`Napisz /info synku`)
    }
    if(text === '/info'){
        return await bot.sendMessage(chatId, 'Information there');
    }
    if(text === '/game'){
        return startGame(chatId)
    }
    return bot.sendMessage(chatId, 'Skurwiel używaj to co ja wiem');
})

bot.on('callback_query', async msg =>{
    const data = msg.data
    const chatId = msg.message.chat.id;
    if(data === '/again'){
        return startGame(chatId)
    }
    if (data == nums[chatId]){
        return await bot.sendMessage(chatId,'Dobra chuju jeszcze zyjesz bo to jest prawiłowa liczba',againOptions)


    }
    else{
        return bot.sendMessage(chatId, `Niestety, Państwu będzie pizda moja liczba to ${nums[chatId]}`,againOptions)
    }

})

