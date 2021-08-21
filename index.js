//For start the bot

const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
client.login(config.token)

//Github and basics commands

client.on('message', msg => {
    if (msg.content == 'github' ){
        msg.reply("My creator github is : https://github.com/LeRoiBlazzer/Hytorke-s-Bot.git")
        console.log("Github sent")
    }
});

//send a image