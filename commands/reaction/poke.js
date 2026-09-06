const reactionEmbed = require('../../embeds/reactionEmbed.js')

module.exports = {
    name: 'poke',
    description: 'Poke a user',

    options: [
        {
            name: 'user',
            description: 'User to poke',
            type: 6,
            required: false,
        },
    ],

    //execute
    callback: async (client, interaction) => {
        await reactionEmbed(interaction)
    }
}
