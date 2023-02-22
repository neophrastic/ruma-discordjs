const reactionEmbed = require('../../embeds/reactionEmbed.js')

module.exports = {
    name:'yes',
    description:'Provide an image of you agree',

    //execute
    callback: async (client, interaction) => {
        reactionEmbed(interaction)
    }
}