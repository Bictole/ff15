const { Client, GatewayIntentBits } = require("discord.js")
const keepAlive = require("./server")

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

  if (message.content === "ff15")
    message.reply(({
      content: "probably a noice idea ...",
    }))
})

keepAlive()
client.login(process.env['TOKEN'])