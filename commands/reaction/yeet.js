const { ApplicationCommandOptionType } = require('discord.js')
const reactionEmbed = require('../../embeds/reactionEmbed.js')

module.exports = {
    name: 'yeet',
    description: 'Yeet a user',

    options: [
        {
            name: 'user',
            description: 'User to yeet',
            type: ApplicationCommandOptionType.User,
            required: false,
        },
    ],

    //execute
    callback: async (client, interaction) => {
        await reactionEmbed(interaction)
    }
}
