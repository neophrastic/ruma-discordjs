const { EmbedBuilder } = require('discord.js')
const axios = require('axios')

module.exports = {
    name: 'waifu',
    description: 'get random waifu',

    //execute
    callback: async (client, interaction) => {
        try {
            await interaction.deferReply()

            const response = await axios.get('https://nekos.best/api/v2/waifu')
            const result = response.data.results?.[0]

            if (!result) {
                await interaction.editReply('An error occurred while trying to find your waifu. Maybe try another one?')
                return
            }

            const embed = new EmbedBuilder()
                .setColor('Random')
                .setTitle('Random Waifu')
                .setImage(result.url)

            if (result.source_url) embed.setURL(result.source_url)
            if (result.artist_name) embed.setFooter({ text: `Artist: ${result.artist_name}` })

            await interaction.editReply({ embeds: [embed] })
        } catch (err) {
            console.log(err)
            const payload = { content: 'Something went wrong while fetching your waifu. Try again later.' }
            interaction.deferred || interaction.replied
                ? await interaction.editReply(payload)
                : await interaction.reply({ ...payload, ephemeral: true })
        }
    }
}
