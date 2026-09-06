const { EmbedBuilder } = require('discord.js')
const fetchReaction = require('../utils/fetchReaction')

module.exports = async (interaction) => {
    try {
        await interaction.deferReply()

        const url = await fetchReaction(interaction.commandName)
        if (!url) {
            await interaction.editReply('Something went wrong while fetching a reaction. Please try again later.')
            return
        }

        const embed = new EmbedBuilder()
            .setColor('Random')
            .setTitle('→')
            .setURL(url)
            .setImage(url)
            .setFooter({ text: 'Nekos.best' })

        const target = interaction.options.getUser('user')
        if (target) {
            embed.setDescription(`${interaction.user} → ${target}`)
        }

        await interaction.editReply({ embeds: [embed] })
    } catch (err) {
        console.log(err)
        const payload = { content: 'Something went wrong while fetching a reaction. Please try again later.' }
        interaction.deferred || interaction.replied
            ? await interaction.editReply(payload)
            : await interaction.reply({ ...payload, ephemeral: true })
    }
}
