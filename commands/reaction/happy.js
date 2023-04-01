const reactionEmbed = require('../../embeds/reactionEmbed.js')

module.exports = {
    name:'happy',
    description:'Provide an image of you happy',

    //execute
    callback: async (client, interaction) => {
        await reactionEmbed(interaction)
    }
}