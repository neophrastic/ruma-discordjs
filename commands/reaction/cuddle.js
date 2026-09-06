const reactionEmbed = require('../../embeds/reactionEmbed.js')

module.exports = {
    name: 'cuddle',
    description: 'Cuddle a user',

    options: [
        {
            name: 'user',
            description: 'User to cuddle',
            type: 6,
            required: false,
        },
    ],

    //execute
    callback: async (client, interaction) => {
        await reactionEmbed(interaction)
    }
}
