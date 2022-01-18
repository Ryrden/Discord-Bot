module.exports = {
	name: "server",
	description: "Server!",
	async execute(message) {
		message.channel.send(
			`Servidor: ***${message.guild.name}*** e tem ***${message.guild.memberCount}***`
		);
	},
};
