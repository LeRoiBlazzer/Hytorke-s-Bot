//For start the bot

const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
client.login(config.token)

//Fist code