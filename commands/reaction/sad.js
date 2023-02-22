const reactionEmbed = require('../../embeds/reactionEmbed.js')

module.exports = {
    name:'sad',
    description:'Provide an image of you sad',

    //execute
    callback: async (client, interaction) => {
        reactionEmbed(interaction)
    }
}