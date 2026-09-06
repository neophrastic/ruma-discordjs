const reactionEmbed = require('../../embeds/reactionEmbed.js')

module.exports = {
    name: 'happy',
    description: 'Provide an image of you happy',

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
