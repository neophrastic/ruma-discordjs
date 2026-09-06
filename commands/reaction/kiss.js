const reactionEmbed = require('../../embeds/reactionEmbed.js')

module.exports = {
    name: 'kiss',
    description: 'Kiss a user',

    options: [
        {
            name: 'user',
            description: 'User to kiss',
            type: 6,
            required: false,
        },
    ],

    //execute
    callback: async (client, interaction) => {
        await reactionEmbed(interaction)
    }
}
