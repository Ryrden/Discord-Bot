module.exports = {
	name: "server",
	description: "Server!",
	async execute(message) {
		message.channel.send(
			`Servidor: ***${message.guild.name}***\nTotal de Membros: ***${message.guild.memberCount}***`
		);
	},
};
