const reactionEmbed = require('../../embeds/reactionEmbed.js')

module.exports = {
    name: 'lappillow',
    description: 'Use a user as your lap pillow',

    options: [
        {
            name: 'user',
            description: 'User to react at',
            type: 6,
            required: false,
        },
    ],

    //execute
    callback: async (client, interaction) => {
        await reactionEmbed(interaction)
    }
}
