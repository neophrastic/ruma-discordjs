const { ApplicationCommandOptionType } = require('discord.js')
const reactionEmbed = require('../../embeds/reactionEmbed.js')

module.exports = {
    name: 'happy',
    description: 'Provide an image of you happy',

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
