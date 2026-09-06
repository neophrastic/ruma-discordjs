const axios = require("axios");
const {EmbedBuilder} = require("discord.js");

module.exports = async (interaction) => {

    // https://stackoverflow.com/a/68774492/13079820
    await interaction.reply('Working on it...');

    try {
        const response = await axios.get(
            `https://anime-reactions.uzairashraf.dev/api/reactions/random?category=${interaction.commandName}`
        )
        const mat = response.data
        let dataApi = mat.reaction

        // since embed cant show webp, this what i can do lmao
        if (dataApi === 'https://anime-reactions.uzairashraf.dev/confused/whaa.webp') dataApi = 'https://cdn.discordapp.com/attachments/1077097920492482560/1077920709596172308/whaa.gif'

        const embed = new EmbedBuilder()
            .setColor("Random")
            .setTitle(`→`)
            .setURL(dataApi)
            .setImage(dataApi)
            .setFooter({text: `Uzairashraf.dev`})

        await interaction.editReply({content: '',embeds: [embed]})
    } catch (err) {
        console.log(err)
        await interaction.editReply('Something went wrong while fetching a reaction. Please try again later.')
    }
}