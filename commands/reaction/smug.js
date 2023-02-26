const reactionEmbed = require('../../embeds/reactionEmbed.js')

module.exports = {
    name:'smug',
    description:'Provide an image of you smug',

    //execute
    callback: async (client, interaction) => {
        await reactionEmbed(interaction)
    }
}