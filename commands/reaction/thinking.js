const reactionEmbed = require('../../embeds/reactionEmbed.js')

module.exports = {
    name:'thinking',
    description:'Provide an image of you thinking',

    //execute
    callback: async (client, interaction) => {
        await reactionEmbed(interaction)
    }
}