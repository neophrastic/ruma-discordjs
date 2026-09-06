const reactionEmbed = require('../../embeds/reactionEmbed.js')

module.exports = {
    name: 'hug',
    description: 'Hug a user',

    options: [
        {
            name: 'user',
            description: 'User to hug',
            type: 6,
            required: false,
        },
    ],

    //execute
    callback: async (client, interaction) => {
        await reactionEmbed(interaction)
    }
}
