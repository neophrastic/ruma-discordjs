const { ApplicationCommandOptionType } = require("discord.js");
const animeMangaEmbed = require("../../embeds/animeMangaEmbed");

module.exports = {
    name:'manga',
    description:'Provides you any manga info',

    options: [
        {
            name: "title",
            description: "Manga title to get",
            type: ApplicationCommandOptionType.String,
            required: true
        },
    ],

    callback: async (client, interaction) => {
        await animeMangaEmbed(interaction)
    }
}