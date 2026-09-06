const {EmbedBuilder} = require('discord.js')
const axios = require('axios')

module.exports = {
    name:'waifu',
    description:'get random waifu',

    //execute
    callback: async (client, interaction) => {
        try {
            const response = await axios.get(`https://api.waifu.im/search`)
            const mat = response.data
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
        } catch (err) {
            console.log(err)
        }
    }
}