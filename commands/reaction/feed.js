const reactionEmbed = require('../../embeds/reactionEmbed.js')

module.exports = {
    name: 'feed',
    description: 'Feed a user',

    options: [
        {
            name: 'user',
            description: 'User to feed',
            type: 6,
            required: false,
        },
    ],

    //execute
    callback: async (client, interaction) => {
        await reactionEmbed(interaction)
    }
}
