const { ApplicationCommandOptionType } = require('discord.js')
const reactionEmbed = require('../../embeds/reactionEmbed.js')

module.exports = {
    name: 'bonk',
    description: 'Bonk a user',

    options: [
        {
            name: 'user',
            description: 'User to react at',
            type: ApplicationCommandOptionType.User,
            required: false,
        },
    ],

    //execute
    callback: async (client, interaction) => {
        await reactionEmbed(interaction)
    }
}
