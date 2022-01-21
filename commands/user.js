module.exports = {
	name: "user",
	description: "User!",
	async execute(message) {
		message.channel.send(
			`Seu nome: ${message.author.username}\nidentificador: ${message.author.id}\nTAG: ${message.author.tag}`
		);
	},
};
