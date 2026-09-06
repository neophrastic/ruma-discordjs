const reactionEmbed = require('../../embeds/reactionEmbed.js')

module.exports = {
    name: 'tickle',
    description: 'Tickle a user',

    options: [
        {
            name: 'user',
            description: 'User to tickle',
            type: 6,
            required: false,
        },
    ],

    //execute
    callback: async (client, interaction) => {
        await reactionEmbed(interaction)
    }
}
