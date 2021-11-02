const fs = require('fs');
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const { token, prefix } = require('./config.json');

client.once('ready', () => {
    console.log(`Estou logado com a tag ${client.user.tag}!`);
});

const commandArray = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles){
    const command = require(`./commands/${file}`);
    commandArray.push(command);
}

client.on('messageCreate', (message) => {
    if (!isCommand(message, prefix)) return;

    const command = getCommand(message, prefix);

    commandArray.forEach(comm => comm.name === command ? comm.execute(message) : null);

});

function isCommand(message, prefix) {
    if (message.content.startsWith(prefix)) {
        return true;
    }
    return false;
}

function getCommand(message, prefix) {
    return message.content.replace(prefix, '');
}

client.login(token);