module.exports = {
    name: 'italic',
    description: 'italic!',
    async execute(message){
        message.channel.send('*italic*');
    }
}