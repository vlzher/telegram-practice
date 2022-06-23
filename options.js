module.exports = {
    gameOptions:{
        reply_markup: JSON.stringify({
            inline_keyboard:
                [
                    [
                        {text: 'Jeden', callback_data: '1'},
                        {text: 'Dwa', callback_data: '2'},
                        {text: 'Trzy', callback_data: '3'}
                    ],
                    [
                        {text: 'Cztery', callback_data: '4'},
                        {text: 'Pięc', callback_data: '5'},
                        {text: 'Sześć', callback_data: '6'}
                    ],
                    [
                        {text: 'Siedem', callback_data: '7'},
                        {text: 'Osiem', callback_data: '8'},
                        {text: 'Dziewieć', callback_data: '9'},
                        {text: 'Dziesiąć', callback_data: '10'}
                    ]
                ]


        })
    },
     againOptions:{
        reply_markup: JSON.stringify(
            {
                inline_keyboard: [
                    [{text: 'Sprobuj jeszcze raz', callback_data: '/again'}]
                ]
            }
        )
    }
}
