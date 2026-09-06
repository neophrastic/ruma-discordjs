const reactionEmbed = require('../../embeds/reactionEmbed.js')

module.exports = {
    name: 'dance',
    description: 'Provide an image of you dancing',

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
