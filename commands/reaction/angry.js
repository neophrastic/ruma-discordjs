const reactionEmbed = require('../../embeds/reactionEmbed.js')

module.exports = {
    name:'angry',
    description:'Provide an image of you angry',

    //execute
    callback: async (client, interaction) => {
        await reactionEmbed(interaction)
    }
}