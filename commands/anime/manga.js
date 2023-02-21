const { get } = require("request-promise")
const {EmbedBuilder } = require('discord.js')

module.exports = {
    name:'manga',
    description:'get manga info',

    options: [
        {
            name: "title",
            description: "Manga title to get",
            type: 3,
            required: true
        },
    ],

    callback: (client, interaction) => {
        let option = {
            uri: `https://kitsu.io/api/edge/manga/?filter[text]=${interaction.options.getString('title')}`,
            method: 'GET',
            headers: {
                'Accept': 'application/vnd.api+json',
            },
            json: true,
        }

        get(option).then(
            async (mangadata) => {
                const dataApi = mangadata.data[0]
                if (!dataApi){
                    interaction.reply('An error occurred while trying to find the manga. Maybe try another one?')
                    return
                }
                const embed = new EmbedBuilder()
                    .setColor("Random")
                    .setTitle(dataApi.attributes.titles.en_jp)
                    .setURL(dataApi.links.self)
                    .setDescription(dataApi.attributes.synopsis)
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
                            value: `**TOP ${dataApi.attributes.ratingRank}**`
                        },
                        {
                            name: "Average rating",
                            value: dataApi.attributes.averageRating
                        },
                    ])
                    .setFooter({text: `Kitsu.io`})
                    .setTimestamp()

                await interaction.reply({embeds: [embed]})
            }
        ).catch((err) => {
            console.log(err)
        })
    }
}