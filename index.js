//For start the bot

const Discord = require("discord.js");
const config = require("./config.json");
const MessageEmbed = require("discord.js")
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const prefix = "h?";
const language = "fr";
client.login(config.token);
console.log('Bot is on');

//basics things

client.on('message', msg => {
    if(msg.content == "Hytorke's Bot ?"){
        msg.reply('Yes, its me');
    }
})

//commands

client.on('message', msg => {
    if (!msg.content.startsWith(prefix)) return;

    const cmsg = msg.content
    const spliter = cmsg.split(prefix)

    if(spliter[01].toLowerCase() == 'github'){
        msg.reply("My creator github is : https://github.com/LeRoiBlazzer/Hytorke-s-Bot.git");
        console.log("Github sent");
    }

    if(spliter[01].toLowerCase() == 'help'){
        msg.reply("- h?help : Show all commands \n- h?github : give the creator's github");
        console.log("help sent");
    }

    if(spliter[01].toLowerCase() == 'ping'){
        msg.channel.send("Pong !");
        console.log("ping sent");
    }

    if(spliter[01].toLowerCase() == 'mirroir'){
        msg.channel.send("https://tenor.com/view/beach-mirror-aesthetic-reflection-waves-gif-17768137");
        console.log("an help was sent");
    }

    if(spliter[01].toLowerCase() == 'goume le'){
        msg.channel.send("https://tenor.com/view/mister-v-oh-jai-envie-de-te-goumer-goumer-je-vais-te-taper-menacer-gif-15403508");
        console.log("an help was sent");
    }
});

//embeds