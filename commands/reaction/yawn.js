const { ApplicationCommandOptionType } = require('discord.js')
const reactionEmbed = require('../../embeds/reactionEmbed.js')

module.exports = {
    name: 'yawn',
    description: 'Provide an image of you yawning',

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
