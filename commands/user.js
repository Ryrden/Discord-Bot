module.exports = {
    name: 'user',
    description: 'User!',
    async execute(message) {
        message.channel.send(`Seu nome: ${message.author.username} e seu identificador: ${message.author.id}`);
    }
}