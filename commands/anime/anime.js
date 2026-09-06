const { ApplicationCommandOptionType } = require('discord.js')
const animeMangaEmbed = require('../../embeds/animeMangaEmbed.js')

module.exports = {
    name:'anime',
    description:'Provides you any anime info',

    options: [
        {
            name: "title",
            description: "Anime title to get",
            type: ApplicationCommandOptionType.String,
            required: true
        },
    ],

    callback: async (client, interaction) => {
        await animeMangaEmbed(interaction)
    }
}