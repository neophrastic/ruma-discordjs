const {EmbedBuilder} = require('discord.js')

module.exports = {
    name:'serverinfo',
    description:'get server information',

    //execute
    callback: async (client, interaction) => {
        const { guild } = interaction
        const { createdTimestamp, ownerId, description, name, memberCount } = guild
        const icon = guild.icon ? `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png` : 'https://cdn.discordapp.com/attachments/1077097920492482560/1077448510275858462/default.png'
        const roles = guild.roles.cache.size
        const emojis = guild.emojis.cache.size

        // verification level
        let verification = guild.verificationLevel
        if (verification === 0) verification = 'None'
        if (verification === 1) verification = 'Low'
        if (verification === 2) verification = 'Medium'
        if (verification === 3) verification = 'High'
        if (verification === 4) verification = 'Very High'

        const embed = new EmbedBuilder()
            .setColor("Random")
            .setAuthor({name: guild.name, iconURL:icon})
            .setThumbnail(icon)
            .addFields({name: `Name`, value: `${guild.name}`, inline: false})
            .addFields({name: `Date created`, value: `<t:${parseInt(createdTimestamp / 1000)}:R> (hover for complete date)`, inline: true})
            .addFields({name: 'Server owner', value: `<@${ownerId}>`, inline: true})
            .addFields({name: 'Server member', value: `${memberCount}`, inline: true})
            .addFields({name: 'Role number', value: `${roles}`, inline: true})
            .addFields({name: 'Emoji number', value: `${emojis}`, inline: true})
            .addFields({name: 'Verification level', value: `${verification}`, inline: true})
            .addFields({name: 'Server boost', value: `${guild.premiumSubscriptionCount}`, inline: true})
            .setFooter({text: `Server ID : ${guild.id}`})
            .setTimestamp()

        await interaction.reply({embeds: [embed]})
    }
}