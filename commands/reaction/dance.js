const reactionEmbed = require('../../embeds/reactionEmbed.js')

module.exports = {
    name:'dance',
    description:'Provide an image of you dance',

    //execute
    callback: async (client, interaction) => {
        await reactionEmbed(interaction)
    }
}