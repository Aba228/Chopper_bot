module.exports = async (bot, member) => {
  const channel = bot.channels.cache.get("978988621547847761");

channel.send({
   embeds: [{
           title: "Наши ряды покинули!",
           description: `Этим человеком был ${member}!`,
           color: "GREEN"

      }]
  });

   console.log("out")
};
