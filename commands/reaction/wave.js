const reactionEmbed = require('../../embeds/reactionEmbed.js')

module.exports = {
    name: 'wave',
    description: 'Wave at a user',

    options: [
        {
            name: 'user',
            description: 'User to wave at',
            type: 6,
            required: false,
        },
    ],

    //execute
    callback: async (client, interaction) => {
        await reactionEmbed(interaction)
    }
}
