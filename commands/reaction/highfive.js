const reactionEmbed = require('../../embeds/reactionEmbed.js')

module.exports = {
    name: 'highfive',
    description: 'High-five a user',

    options: [
        {
            name: 'user',
            description: 'User to high-five',
            type: 6,
            required: false,
        },
    ],

    //execute
    callback: async (client, interaction) => {
        await reactionEmbed(interaction)
    }
}
