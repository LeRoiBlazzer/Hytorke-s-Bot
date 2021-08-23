//For start the bot

const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
const prefix = "h?" 
client.login(config.token)
console.log('Bot is on');

//Github and basics commands

client.on('message', msg => {
    if (msg.content == 'h?github' ){
        msg.reply("My creator github is : https://github.com/LeRoiBlazzer/Hytorke-s-Bot.git")
        console.log("Github sent")
    }
});

//Split

client.on('message', msg => {
    if (msg.content.startsWith(prefix)){
        console.log('message send !');
    } else {
        msg.channel.send("This is the good prefix, but the command is wrong. Retry :smirk:")
        console.log('Wrong command message send');
    };
});
