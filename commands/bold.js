module.exports = {
    name: 'bold',
    description: 'Bold!',
    async execute(message){
        const newMessage = await message.reply('**bold**');

        await newMessage.react('🚀')
    }
}