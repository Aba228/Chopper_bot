
module.exports = async (bot) => {
    console.log(bot.user.username + " is ready");

    bot.user.setPresence({
        activities: [{
            name: "Ван Пис",
            type: 3
        }],
        status: 'dnd'
    })


    bot.application.commands.create({
        name: 'help',
        description: 'Присылает инструкции косательно бота',
    }, '978984551684661278')
        .catch(console.error);

    bot.application.commands.create({
        name: 'helpmusic',
        description: 'Присылает инструкции косательно музыки у данного бота',
    }, '978984551684661278')
        .catch(console.error);

    bot.application.commands.create({
        name: 'obamna1',
        description: 'Присылает первого Обамну младшего',
    }, '978984551684661278')
        .catch(console.error);

    bot.application.commands.create({
        name: 'obamna2',
        description: 'Присылает второго Обамну старшего',
    }, '978984551684661278')
        .catch(console.error);

    bot.application.commands.create({
        name: 'littleobamnas',
        description: 'Присылает кучку маленьких Обамн',
    }, '978984551684661278')
        .catch(console.error);

    bot.application.commands.create({
        name: 'rickroll',
        description: 'Рикроллит кого-либо',
    }, '978984551684661278')
        .catch(console.error);

    bot.application.commands.create({
        name: 'complimentthechopper',
        description: 'Вы похвалите Chopper`а',
    }, '978984551684661278')
        .catch(console.error);


}
