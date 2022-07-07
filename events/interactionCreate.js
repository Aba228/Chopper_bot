module.exports = async (bot, interaction) => {

    if (interaction.isCommand() && interaction.commandName == 'help') {
        interaction.reply({
            embeds: [{
                title: '*ИНСТРУКЦИЯ ПО ИСПОЛЬЗОВАНИЮ БОТА*',
                description: '1. Есть такие фановый команды как: `rickroll`, `obamna1` и так далее.\n 2. Косательно музыки, то для этого есть команда `helpmusic`, с помощью которой вы получите инструкции об использовании музыкальных команд бота.\n 3. Разработчик данного бота спрятал очень много секретных команд, которые не отображаются, поэтому будте осторожны в разговори с разработчиком.',
                color: "GREEN"
            }]
        })
    }

    if (interaction.isCommand() && interaction.commandName == 'helpmusic') {
        interaction.reply({
            embeds: [{
                title: '*ИНСТРУКЦИЯ ПО ИСПОЛЬЗОВАНИЮ МУЗЫКАЛЬНЫХ КОМАНД БОТА*',
                description: 'Для того чтобы воспользоваться музыкальными командами бота, вам надо:\n 1. Зайти в тот голосовой канал, в котором вы хотите прослишать музыку.\n 2. Напишите в текстовый канал <#992092564687695902> `>Играй` и название трека с большой буквы, например `>Играй Зараза`. \n Меню треков: \n `Slim Shady` \n `Белая  ночь опустилась как облако` \n`Кайен` \n`Without Me` \n`Зараза` \n`Я счастливый как никто` \n`Бродяга` \n`Cheri lady` \n`Слева горы, справа горы` \n`Pretty woman` \n *ЧТОБЫ ОСТАНОВИТЬ ПРОИГРОВАНИЕ МУЗЫКИ* \n Чтобы остоновить проигрование музыки напишите в чат <#992092564687695902> `>Выходи из войса`',
                color: "GREEN"
            }]
        })
    }

//fun    
    if (interaction.isCommand() && interaction.commandName == 'rickroll') {
        interaction.reply({
            embeds: [{
                image: {
                    url: "https://c.tenor.com/CWgfFh7ozHkAAAAC/rick-astly-rick-rolled.gif",
                    proxyURL: "https://c.tenor.com/CWgfFh7ozHkAAAAC/rick-astly-rick-rolled.gif",
                    height: 500,
                    width: 500
                },
                color: "RANDOM"
            }]
        })
    }

    if (interaction.isCommand() && interaction.commandName == 'obamna1') {
        interaction.reply('https://i1.sndcdn.com/artworks-nyMH0GjImlLpxj4T-NdIi9w-t240x240.jpg');
    }

    if (interaction.isCommand() && interaction.commandName == 'obamna2') {
        interaction.reply('https://i1.sndcdn.com/artworks-L7ac5Fdv2iyuStw7-8EAYyQ-t500x500.jpg');
    }

    
    if (interaction.isCommand() && interaction.commandName == 'littleobamnas') {
        interaction.reply('https://cdn.discordapp.com/attachments/983279677001064478/993556757580369950/IMG_2811.png');
    }

    if (interaction.isCommand() && interaction.commandName == 'complimentthechopper') {
        interaction.reply({
            embeds: [{
                description:  interaction.user.toString() + ", спасибо за похвалу!",
                color: "GREEN"
            }]

        });
    }
}