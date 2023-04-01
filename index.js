const { Client, GatewayIntentBits } = require("discord.js")
const keepAlive = require("./server")
const { addEmote } = require('./emote')
const { kivaou, kivaouTryhard } = require('./kivaou')

var fs = require('fs');
const DateDiff = require("date-diff").default;

const Database = require("@replit/database")

const db = new Database();

db.get("sincos_timer").then(sincos_timer => {
  if (!sincos_timer) {
    let date = new Date();
    console.log(`Sincos date : ${date}`)
    db.set("sincos_timer", date);
  }
})

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

  if (message.content === "ff15") {
    message.reply(({
      content: "probably a noice idea ...",
    }))
    console.log(`INFO [FF15] by ${name}`);
  }

  if (message.content === "kivaou") {
    kivaou(message);
    console.log(`INFO [KIVAOU] by ${name}`);
  }

  if (message.content === "kivaou tryhard") {
    kivaouTryhard(message);
    console.log(`INFO [KIVAOUTRYHARD] by ${name}`)
  }

  if (message.content.includes("sin") || message.content.includes("cos")) {
    if (message.content === "sincos") {
      db.get("sincos_timer").then(sincos_timer => {
        let lastDate = new Date(sincos_timer);
         
        message.reply(({
        content: `Last usage of sin or cos : ${lastDate.toUTCString()}`,
        }))
      })

      console.log(`INFO [sincos] by ${name}`);
    }
    else {
      db.get("sincos_timer").then(sincos_timer => {
        let now = new Date();
        let lastDate = new Date(sincos_timer);

        let diff = new DateDiff(now, lastDate);
                
        message.reply(({
        content: `SIN OR COS USAGE ! YOU HOLD ${diff.hours()} HOURS ! TIMER RESET !`,
        }));

        db.set("sincos_timer", now)
      })

      console.log(`INFO [sincos] SinCos RESET`);
    }
  }

  if (Math.random() < 0.10) {
    addEmote(name, messageContent, message);
    console.log(`[REACT] on ${name} message telling ${messageContent}`);
  }
})

keepAlive()
client.login(process.env['TOKEN'])