//For start the bot

const Discord = require("discord.js");
const config = require("./config.json");
const { MessageButton } = require("discord-buttons");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
client.login(config.token)

//Github and basics commands

client.on('message', msg => {
    if (msg.content == '??github' ){
        msg.reply("My creator github is : https://github.com/LeRoiBlazzer/Hytorke-s-Bot.git")
        console.log("Github sent")
    }
});

//send a button

const buttontuto = new MessageButton()
.setStyle("red")
.setLabel("Test")
.setID("buttontuto")

client.on('message', msg => {
    if (msg.content == "??bouton"){
        message.reply("test de bouton", buttontuto)
        console.log("Buttontuto send")
    }
})
