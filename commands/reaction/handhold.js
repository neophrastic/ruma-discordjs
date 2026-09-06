const { ApplicationCommandOptionType } = require('discord.js');
const reactionEmbed = require('../../embeds/reactionEmbed.js')

module.exports = {
    name: 'handhold',
    description: 'Hold hands with a user',

    options: [
        {
            name: 'user',
            description: 'User to hold hands with',
            type: ApplicationCommandOptionType.User,
            required: false,
        },
    ],

    //execute
    callback: async (client, interaction) => {
        await reactionEmbed(interaction)
    }
}
