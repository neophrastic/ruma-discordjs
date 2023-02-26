const animeMangaEmbed = require('../../embeds/animeMangaEmbed.js')

module.exports = {
    name:'anime',
    description:'Provides you any anime info',

    options: [
        {
            name: "title",
            description: "Anime title to get",
            type: 3,
            required: true
        },
    ],

    callback: async (client, interaction) => {
        await animeMangaEmbed(interaction)
    }
}