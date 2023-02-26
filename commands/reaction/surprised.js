const reactionEmbed = require('../../embeds/reactionEmbed.js')

module.exports = {
    name:'surprised',
    description:'Provide an image of you surprised',

    //execute
    callback: async (client, interaction) => {
        await reactionEmbed(interaction)
    }
}