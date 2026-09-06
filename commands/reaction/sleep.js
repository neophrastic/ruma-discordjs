const reactionEmbed = require('../../embeds/reactionEmbed.js')

module.exports = {
    name: 'sleep',
    description: 'Provide an image of you sleeping',

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
