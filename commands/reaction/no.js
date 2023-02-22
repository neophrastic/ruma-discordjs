const reactionEmbed = require('../../embeds/reactionEmbed.js')

module.exports = {
    name:'no',
    description:'Provide an image of you disagree',

    //execute
    callback: async (client, interaction) => {
        reactionEmbed(interaction)
    }
}