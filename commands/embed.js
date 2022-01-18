const { MessageEmbed } = require("discord.js");
module.exports = {
	name: "embed",
	description: "Embed!",
	async execute(message) {
		const exampleEmbed = new MessageEmbed()
			.setColor("#0099ff")
			.setTitle("A Embed")
			.setURL("https://discord.js.org/")
			.setAuthor(
				"Some name",
				"https://i.imgur.com/wSTFkRM.pn",
				"https://discord.js.org"
			)
			.setDescription("Some Description here")
			.setThumbnail("https://i.imgur.com/AfFp7pu.png")
			.addFields(
				{ name: "Regular field tittle", value: "Some value here" },
				{ name: "\u200B", value: "\u200B" },
				{ name: "Inline field tittle", value: "Some value here", inline: true }
			)
			.addField("Inline field title", "Some value here", true)
			.setImage("https://i.imgur.com/AfFp7pu.png")
			.setTimestamp()
			.setFooter("Some footer text here", "https://i.imgur.com/AfFp7pu.png");

		message.channel.send({ embeds: [exampleEmbed] });
	},
};
