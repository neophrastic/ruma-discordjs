const axios = require("axios");
const {EmbedBuilder} = require("discord.js");

module.exports = async (interaction) => {

    await interaction.reply('Working on it...');

    try {
        const response = await axios.get(
            `https://kitsu.io/api/edge/${interaction.commandName}/?filter[text]=${interaction.options.getString('title')}`,
            { headers: { 'Accept': 'application/vnd.api+json' } }
        )
        const mat = response.data
        const dataApi = mat.data[0]
        if (!dataApi){
            await interaction.editReply(`An error occurred while trying to find the ${interaction.commandName}. Maybe try another one?`)
            return
        }

            let title = dataApi.attributes.titles.en_jp || dataApi.attributes.titles.en_cn || dataApi.attributes.titles.en_kr

        const embed = new EmbedBuilder()
                .setColor("Random")
                .setTitle(title)
                .setURL(dataApi.links.self)
                .setDescription(dataApi.attributes.synopsis ? dataApi.attributes.synopsis : "No synopsis.")
                .setThumbnail(dataApi.attributes.posterImage.original)
                .addFields([
                    {
                        name: "Status",
                        value: dataApi.attributes.status
                    },
                    {
                        name: "Type",
                        value: dataApi.type
                    },
                    {
                        name: "Published",
                        value: `${dataApi.attributes.startDate} **TO** ${dataApi.attributes.endDate ? dataApi.attributes.endDate : "N/A"}`
                    },
                    {
                        name: "Next release",
                        value: dataApi.attributes.nextRelease ? dataApi.attributes.nextRelease : "N/A"
                    },
                    {
                        name: "Volume count",
                        value: dataApi.attributes.volumeCount ? dataApi.attributes.volumeCount.toString() : "N/A"
                    },
                    {
                        name: "Chapter count",
                        value: dataApi.attributes.chapterCount ? dataApi.attributes.chapterCount.toString() : "N/A"
                    },
                    {
                        name: "Rank",
                        value: dataApi.attributes.ratingRank ? `**TOP ${dataApi.attributes.ratingRank}**` : "N/A"
                    },
                    {
                        name: "Average rating",
                        value: dataApi.attributes.averageRating ? dataApi.attributes.averageRating.toString() : "N/A"
                    },
                ])
                .setFooter({text: `Kitsu.io`})
                .setTimestamp()

        await interaction.editReply({content: '', embeds: [embed]})
    } catch (err) {
        console.log(err)
        await interaction.editReply('Something went wrong while fetching data. Please try again later.')
    }
}