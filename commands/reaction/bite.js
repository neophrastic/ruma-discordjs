const reactionEmbed = require('../../embeds/reactionEmbed.js')

module.exports = {
    name: 'bite',
    description: 'Bite a user',

    options: [
        {
            name: 'user',
            description: 'User to bite',
            type: 6,
            required: false,
        },
    ],

    //execute
    callback: async (client, interaction) => {
        await reactionEmbed(interaction)
    }
}
