
module.exports = (bot) => {
    bot.on('ready', ()=> require("./ready")(bot)).on('messageCreate', (message)=>require("./messageCreate")(bot, message));
    bot.on('guildMemberRemove', (member)=> require("./guildMemberRemove.js")(bot, member));
    bot.on('guildMemberAdd', (member)=> require("./guildMemberAdd.js")(bot, member));
    bot.on('interactionCreate', interaction => require('./interactionCreate.js')(bot, interaction));
};