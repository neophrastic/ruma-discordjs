const {EmbedBuilder, ApplicationCommandOptionType } = require('discord.js')

module.exports = {
    name:'userinfo',
    description:'get user information',
    options: [
        {
            name: "user",
            description: "The user to get",
            type: ApplicationCommandOptionType.User,
            required: false
        },
    ],

    //execute
    callback: async (client, interaction) => {
        try {
            const user =  interaction.options.getUser('user') ||  interaction.user;
            const member = await interaction.guild.members.fetch(user.id)
            const icon = user.displayAvatarURL();
            const tag = user.tag

            const roles = member.roles.cache.map((r) => r.toString()).slice(0, -1).join(' ').slice(0, 1000) || 'None';

            const embed = new EmbedBuilder()
            .setColor("Blue")
            .setAuthor({name: tag, iconURL: icon})
            .setThumbnail(icon)
            .addFields({name: "Member", value: `${user}`, inline: false})
            .addFields({name: "Roles", value: roles, inline: false})
            .addFields({name: "Joined Server", value: `<t:${parseInt(member.joinedAt / 1000)}:R>`, inline: true})
            .addFields({name: "Joined Discord", value: `<t:${parseInt(user.createdAt / 1000)}:R>`, inline: true})
            .setFooter({text: `User ID : ${user.id}`})
            .setTimestamp()

            await interaction.reply({embeds: [embed]})
        } catch (error) {
            console.error(error);
            const payload = { content: 'Something went wrong. Please try again later.' };
            interaction.deferred || interaction.replied
                ? await interaction.editReply(payload)
                : await interaction.reply({ ...payload, ephemeral: true });
        }
    }
}