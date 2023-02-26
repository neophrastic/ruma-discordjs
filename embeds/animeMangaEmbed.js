const {get} = require("request-promise");
const {EmbedBuilder} = require("discord.js");

module.exports = async (interaction) => {

    await interaction.reply('Working on it...');

    let option = {
        uri: `https://kitsu.io/api/edge/${interaction.commandName}/?filter[text]=${interaction.options.getString('title')}`,
        method: 'GET',
        headers: {
            'Accept': 'application/vnd.api+json',
        },
        json: true,
    }

    get(option).then(
        async (mat) => {
            const dataApi = mat.data[0]
            if (!dataApi){
                interaction.reply(`An error occurred while trying to find the ${interaction.commandName}. Maybe try another one?`)
                return
            }

            // handle title
            let title = dataApi.attributes.titles.en_jp
            if (!title) {
                title = dataApi.attributes.titles.en_cn || dataApi.attributes.titles.en_kr
            }

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
        }
    ).catch((err) => {
        console.log(err)
    })
}