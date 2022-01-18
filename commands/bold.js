module.exports = {
    name: 'bold',
    description: 'Bold!',
    async execute(message){
        const newMessage = await message.channel.send('**bold**');

        await newMessage.react('🚀')
    }
}