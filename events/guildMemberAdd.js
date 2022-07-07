
module.exports = async (bot, member) => {
  const channel = bot.channels.cache.get("978988621547847761");

channel.send({
   embeds: [{
           title: "Новый участник!",
           description: `Этим человеком стал ${member}!`,
           color: "GREEN"

      }]
  });

   console.log("in")
};