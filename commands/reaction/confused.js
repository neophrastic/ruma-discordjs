const reactionEmbed = require('../../embeds/reactionEmbed.js')

module.exports = {
    name:'confused',
    description:'Provide an image of you confused',

    //execute
    callback: async (client, interaction) => {
        await reactionEmbed(interaction)
    }
}