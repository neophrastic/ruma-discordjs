const reactionEmbed = require('../../embeds/reactionEmbed.js')

module.exports = {
    name: 'handshake',
    description: 'Shake hands with a user',

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
