const { createReadStream } = require('node:fs');
const { joinVoiceChannel, createAudioResource, createAudioPlayer, getVoiceConnection } = require('@discordjs/voice');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('../config.json');
const { SlashCommandBuilder } = require('@discordjs/builders');

const players = {}
/**
 * @param {Message} message Сообщение 
 * @param {string} trackName Имя трека
 */
    //message.reply("https://64.media.tumblr.com/9cf4e98cb7698c1433270b8c46225197/887045de5ce7786b-70/s640x960/de966695589a92442ef5a1c9fc179696add1d308.gifv")

function playTrack(message, trackName) {
    const { client } = message,
        channel = message.member.voice.channel;
    if (!channel) return message.channel.send({
        embeds: [{
            title: "Вы не находитесь в голосовом канале.",
            description: "Войдите в голосовой канал, чтобы совершить ваше действие.",
            color: "GREEN"
        }]

    })
    if (!channel.permissionsFor(client.user).has("CONNECT") || !channel.permissionsFor(client.user).has("SPEAK")) return message.channel.send({
        embeds: [{
            title: "Ошибка подключения!",
            description: "Мне не хватает прав, чтобы войти и говорить на этом канале.",
            color: "GREEN"
        }]

    })
    const connection = getVoiceConnection(channel.guild.id) || joinVoiceChannel({
        channelId: channel.id,
        guildId: channel.guild.id,
        adapterCreator: channel.guild.voiceAdapterCreator,
    });

    const resource = createAudioResource(createReadStream(`./music/${trackName}`));
    const player = players[message.guild.id] ?? (players[message.guild.id] = createAudioPlayer());
    player.play(resource);
    connection.subscribe(player);
}


// const commands = [];
// const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// //
// Place your client and guild ids here
// const clientId = ga(function(tracker) { var clientId = tracker.get('clientId'); });;
// const guildId = '978984551684661278';

// for (const file of commandFiles) {
// 	const command = require(`./commands/${file}`);
// 	commands.push(command.data.toJSON());
// }

// const rest = new REST({ version: '9' }).setToken(token);

// (async () => {
// 	try {
// 		console.log('Started refreshing application (/) commands.');

// 		await rest.put(
// 			Routes.applicationGuildCommands(clientId, guildId),
// 			{ body: commands },
// 		);

// 		console.log('Successfully reloaded application (/) commands.');
// 	} catch (error) {
// 		console.error(error);
// 	}
// })();

module.exports = async (bot, message) => {

    if (message.author.bot) return;

    console.log("В канале " + message.channel.name);
    console.log("Юзер " + message.author.username)
    console.log("Прислал сообщение: " + message.content)




    if (message.content == "/const1") {
        message.channel.send({
            embeds: [{
                title: "Пункт 1.",
                description: "Не спамить и не флудить во всех канала кроме <#988153203679985694> ",
                color: "GREEN",
                tts: true
            }]

        })
    }

    if (message.content == "/const2") {
        message.channel.send({
            embeds: [{
                title: "Пункт 2.",
                description: "Желательно не сокращать сообщения, за слишком частое употребление сокращение можно получить разнообразное наказание.  ",
                color: "GREEN"
            }]

        })
    }


    if (message.content == "/const3") {
        message.channel.send({
            embeds: [{
                title: "Пункт 3.",
                description: "Каналы могут создавать только <@&979004666572574731>   и я <@&978993917057974372> . ",
                color: "GREEN"
            }]

        })
    }


    if (message.content == "/const4") {
        message.channel.send({
            embeds: [{
                title: "Пункт 4.",
                description: "Никто не имеет право отключать мут у людей на сервере просто так, также никто не имеет права давать мут просто так, это делают  <@&979004666572574731> с указанием объективной причины. ",
                color: "GREEN"
            }]

        })
    }


    if (message.content == "/const5") {
        message.channel.send({
            embeds: [{
                title: "Пункт 5.",
                description: "Будьте добры не злоупотреблять матами, за большое количество матов - мут. Можно до 2 в одном сообщении, а если сообщения идут подряд то 8. ",
                color: "GREEN"
            }]

        })
    }


    if (message.content == "/const6") {
        message.channel.send({
            embeds: [{
                title: "Пункт 6.",
                description: "Удалять, добавлять правила, банить могут только <@&979004666572574731> , но для этого нужно проголосовать в <#978994976878907473>, если 4 голоса ~за~ то удаляем, добавляем или баним. Для всех остальных участников есть чат <#979007930902921276> , высказывайте там свои мысли и предложения по поводу работы сервера, его участников и т.д.  <@&979004666572574731>   будут с этим разбираться.",
                color: "GREEN"
            }]

        })
    }


    if (message.content == "/const7") {
        message.channel.send({
            embeds: [{
                title: "Пункт 7.",
                description: "Любое моё серьёзное решение или решение одного <@&979004666572574731>   другие <@&979004666572574731> могут оспорить и если 4 будут против, то решение отменяется, голосуем в <#978994976878907473> . ",
                color: "GREEN"
            }]

        })
    }


    if (message.content == "/const8") {
        message.channel.send({
            embeds: [{
                title: "Пункт 8.",
                description: "Нужно уважать чужие вкусы.",
                color: "GREEN"
            }]

        })
    }


    if (message.content == "/const9") {
        message.channel.send({
            embeds: [{
                title: "Пункт 9.",
                description: "Для некоторых тем общения есть специальные чаты, <#978996793675251763> для голосований, а <#978984552129245236>  для включения музыки, не стоит общаться в обычных чатах на ту тему, для которой есть специальный канал. За первое нарушение предупреждение, за второе мут.  ",
                color: "GREEN"
            }]

        })
    }


    if (message.content == "/const10") {
        message.channel.send({
            embeds: [{
                title: "Пункт 10.",
                description: "В категорию ИГРЫ добавлять только каналы по многопользовательским онлайн играм, одиночные не считаются.",
                color: "GREEN"
            }]

        })
    }


    if (message.content == "/const11") {
        message.channel.send({
            embeds: [{
                title: "Пункт 11.",
                description: "Если создаёшь голосование или опрос, то отмечай всех через <@everyone> в первом сообщении, последующие (если они есть, пиши без упоминаний), а если участвуешь в опросе, то отвечай на сообщение опрашивающего. ",
                color: "GREEN"
            }]

        })
    }


    if (message.content == "/const12") {
        message.channel.send({
            embeds: [{
                title: "Пункт 12.",
                description: "Очевидно, что за многократное нарушение правил мут будет выдаваться на длительный срок.",
                color: "GREEN"
            }]

        })
    }


    if (message.content == "/const13") {
        message.channel.send({
            embeds: [{
                title: "Пункт 13.",
                description: "Если человек пишет длинные сообщения или опросы, не перебивайте его. Просто подождите пока он закончит или перейдите в другой чат, их тут целых 3! ",
                color: "GREEN"
            }]

        })
    }


    if (message.content == "/const14") {
        message.channel.send({
            embeds: [{
                title: "Пункт 14.",
                description: "По достижении 15 уровня <@&979005171268997130> будет повышаться до <@&979320124442030100>, эта роль имеет чуть больше прав и возможностей.",
                color: "GREEN"
            }]

        })
    }

    if (message.content == "/const15") {
        message.channel.send({
            embeds: [{
                title: "Пункт 15.",
                description: "",
                color: "GREEN"
            }]

        })
    }

    if (message.content == "/const16") {
        message.channel.send({
            embeds: [{
                title: "Пункт 16.",
                description: "Строго запрещается упоминать человека в место того, чтобы ответить ему на сообщение (в основном касается <@!981450350328422500>).",
                color: "GREEN"
            }]

        })
    }

    if (/блять/i.test(message.content)) {
        message.delete();
    }
    // Jaba watching you


    if (message.content == ">Играй Slim Shady") playTrack(message, "Eminem — The Real Slim Shady.mp3")
    if (message.content == ">Играй Белая  ночь опустилась как облако") playTrack(message, "Черниковская хата - Белая ночь.mp3")
    if (message.content == ">Играй Кайен") playTrack(message, "Валентин Стрыкало - Кайен (Speed up).mp3")
    if (message.content == ">Играй Without Me") playTrack(message, "Eminem (Эминем) - Without Me.mp3")
    if (message.content == ">Играй Зараза") playTrack(message, "Grigorij_Leps_Zaraza.mp3")
    if (message.content == ">Играй Я счастливый как никто") playTrack(message, "grigorijj-leps-ja-schastlivyjj.mp3")
    if (message.content == ">Играй Бродяга") playTrack(message, "jelbrus-dzhanmirzoev-feat.-alexandros-brodjaga.mp3")
    if (message.content == ">Играй Cheri lady") playTrack(message, "Modern Talking - Cheri Cheri Lady.mp3")
    if (message.content == ">Играй Слева горы, справа горы") playTrack(message, "Pesnya_iz_Tik_tok_Sleva_gory_sprava_gory_a_vdali_kavkaz.mp3")
    if (message.content == ">Играй Pretty woman") playTrack(message, "videoplayback.mp4")
    if (message.content == ">Привет, Чоппер") playTrack(message, "howareyou.mp3")
    if (message.content == ">Чоппер, как у тебя дела?") playTrack(message, "good.mp3")
    if (message.content == ">Чем занимаешься?") playTrack(message, "onepeace.mp3")
    if (message.content == ">Пока, Чоппер") playTrack(message, "bye.mp3")

    if (message.content == ">Выходи из войса") {
        const connection = getVoiceConnection(message.guild.id);
        if (!connection) return;
        connection.destroy();
    }

    if (message.content == "Test") {
        message.channel.send({

            image: {
                url: "https://sun1.41039.userapi.com/s/v1/ig2/r9g-ShrlYPgdHSAbSZ1dpnfgZmz7ZbCMNwgkTmJThLIBE3OHRMKydBYv8fhtOod0tJT1Y70neNiDMSuumpV-ao5A.jpg?size=200x200&quality=96&crop=241,1,1437,1437&ava=1",
                proxyURL: "https://vk.com/maria.reznichenko",
                height: 500,
                width: 500
            },
            color: "GREEN"
        })
    }

    if (message.content == "Представься!"){

        const a = [0, 1, 2]
        message.channel.send({
            content: a[Math.floor(Math.random() * a.length)].toString()
        })

    }

    if (message.content == ">Пришли обэму") {
        message.channel.send("https://i.ytimg.com/vi/5eyDWs1zstA/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDR9LCCRbxnM45RRkULMgGggVYN3w");
    }

    if (message.content == ">Пришли другого обэму") {
        message.channel.send("https://c.tenor.com/uMhykBRgexkAAAAC/%D0%BE%D0%B1%D1%8D%D0%BC%D0%B5-%D0%BE%D0%B1%D1%80%D0%B0%D1%89%D0%B5%D0%BD%D0%B8%D0%B5%D0%BA%D0%BE%D0%B1%D0%B0%D0%BC%D0%B5.gif");

    }

    if (message.content == ">Конститут, ты харош") {
        message.channel.send({
            embeds: [{
                description: "<@" + message.author.id + ">" + " спасибо, бротик",
                color: "GREEN"
            }]

        });

    }

    if (message.content == "ping") {
        message.channel.send('pong                                                                                                                                                                                                                                                                                                                  ');

    }

    if (message.content == ">Ответ бабе мане!") {
        message.reply({
            embeds: [{
                title: "Окие, бротик",                    
                description: "Баба Маня идите нахуй! <@!692057178072285214>",
                color: "GREEN"                                           
            }]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
        });
        message.channel.send("<@!692057178072285214>");                                                       

    }

    if (message.content == ">Конститут, Денис обидел тебя") {
        message.channel.send({
            embeds: [{
                title: "Я обиделся...",
                description: "Лично к нему неновисть не испытываю, но такие люди должны гореть в аду!",
                color: "GREEN"
            }]

        });

    }


    if (message.content == "Канибоба") {
        message.reply("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNTUu5Lprr0h4oqJi-elnDV_eY_HMzUsXpZMP2IEq1rvJH7YY5H8VdIgVaF8MKuLDPcsI&usqp=CAU");
        message.reply({
            embeds: [{
                title: "Пизда.",
                description: "В твоём звезда.",
                color: "GREEN",
                tts: true
            }]

        })
    }

    if (message.content == "канибоба") {
        message.reply("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNTUu5Lprr0h4oqJi-elnDV_eY_HMzUsXpZMP2IEq1rvJH7YY5H8VdIgVaF8MKuLDPcsI&usqp=CAU");
        message.reply({
            embeds: [{
                title: "Пизда.",
                description: "В твоём звезда.",
                color: "GREEN",
                tts: true
            }]

        })
    }

    if (message.content == ">R") {
        message.channel.send({
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

    if (message.content == ">Верни Алине киндер пингви") {
        message.channel.send({
            embeds: [{
                description: "<@!976919462722818068> вот твой пингви!",
                image: {
                    url: "https://megatitan.ru/upload/iblock/e7c/w7d8o39yj300a7urb9mqhlmoo79y63a5.jpg",
                    proxyURL: "https://megatitan.ru/upload/iblock/e7c/w7d8o39yj300a7urb9mqhlmoo79y63a5.jpg",
                    height: 500,
                    width: 500
                },
                color: "GREEN"
            }]

        })
    }

    if (message.content == ">Покажи бабу Маню!") {
        for(let i = 0; i <= 60; i++){
            message.channel.send({
                files: ["ШИРОКОРОТИК.PNG"]
            })
        }
    }

}