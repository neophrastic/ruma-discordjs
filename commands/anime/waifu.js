const {EmbedBuilder} = require('discord.js')
const {get} = require("request-promise");

module.exports = {
    name:'waifu',
    description:'get random waifu',

    //execute
    callback: async (client, interaction) => {
        let option = {
            uri: `https://api.waifu.im/search`,
            method: 'GET',
            json: true,
        }

        get(option).then(
            async (mat) => {
                const dataApi = mat.images[0]
                if (!dataApi){
                    interaction.reply('An error occurred while trying to find your waifu. Maybe try another one?')
                    return
                }
                const embed = new EmbedBuilder()
                    .setColor("Random")
                    .setTitle(`🡲`)
                    .setURL(dataApi.url)
                    .setImage(dataApi.url)
                    .setFooter({text: `Waifu.im`})

                await interaction.reply({embeds: [embed]})
            }
        ).catch((err) => {
            console.log(err)
        })
    }
}