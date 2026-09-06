const { ApplicationCommandOptionType } = require('discord.js')
const reactionEmbed = require('../../embeds/reactionEmbed.js')

module.exports = {
    name: 'slap',
    description: 'Slap a user',

    options: [
        {
            name: 'user',
            description: 'User to slap',
            type: ApplicationCommandOptionType.User,
            required: false,
        },
    ],

    //execute
    callback: async (client, interaction) => {
        await reactionEmbed(interaction)
    }
}
