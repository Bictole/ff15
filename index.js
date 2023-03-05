const { Client, GatewayIntentBits } = require("discord.js")
const keepAlive = require("./server")
const addEmote = require('./addEmote')

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("messageCreate", (message) => {
  if (message.author.bot)
    return;

  let messageContent = message.content.toLowerCase()
  let name = message.author.username.toLowerCase()

  if (message.content === "ff15")
    message.reply(({
      content: "probably a noice idea ...",
    }))

  if (Math.random() < 0.15)
    {
        addEmote(name, messageContent, msg);
    }
})

keepAlive()
client.login(process.env['TOKEN'])