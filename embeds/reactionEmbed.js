const { EmbedBuilder } = require('discord.js')
const fetchReaction = require('../utils/fetchReaction')

module.exports = async (interaction) => {
    try {
        await interaction.deferReply()

        const result = await fetchReaction(interaction.commandName)
        if (!result) {
            await interaction.editReply('Something went wrong while fetching a reaction. Please try again later.')
            return
        }

        const embed = new EmbedBuilder()
            .setColor('Random')
            .setTitle('→')
            .setURL(result.url)
            .setImage(result.url)
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
