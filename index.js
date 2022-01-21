/* Requisitando e instanciando 
as classes necessarias da API Discord.js */
const { Client, Intents } = require("discord.js");
const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

//para navegar entre os arquivos do computador
const fs = require("fs");

//configurando o arquivo .env
const dotenv = require("dotenv");
dotenv.config();

//Armazenando o Token de cliente e definindo o prefixo para comandos
const token = process.env.DISCORD_TOKEN;
const { prefix } = require("./config.json");

// Quando o cliente estiver pronto, rodar esse código
client.once("ready", () => {
	console.log(`Estou logado com a tag ${client.user.tag}!`);
});

const commandArray = [];
const commandFiles = fs
	.readdirSync("./commands")
	.filter((file) => file.endsWith(".js"));

commandFiles.forEach((file) => {
	const command = require(`./commands/${file}`);
	commandArray.push(command);
});

client.on("messageCreate", (message) => {
	if (!isCommand(message, prefix)) return;

	const command = getCommand(message, prefix);

	commandArray.forEach((comm) =>
		comm.name === command ? comm.execute(message) : null
	);
});

function isCommand(message, prefix) {
	return message.content.startsWith(prefix) ? true : false;
}

function getCommand(message, prefix) {
	return message.content.replace(prefix, "");
}

//Loga no discord usando o Token de cliente
client.login(token);
