const { Client, IntentsBitField, Routes, REST, EmbedBuilder } = require('discord.js')
require('dotenv/config')

const ping = {
    name: 'ping',
    description: 'Pings the bot and shows the latency'
};
const userinfo = {
    name:'userinfo',
    description:'get user information',
    options: [
        {
            name: "user",
            description: "The user to get",
            type: 6, // 6 is type USER
            required: false
        },
    ]
  }
  
const commands = [ping, userinfo];

const client = new Client({
    intents : [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
})

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });
  
client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'ping') {
        await interaction.reply(`Latency is ${Date.now() - interaction.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);  
    }

    if (interaction.commandName === "userinfo"){
        const user =  interaction.options.getUser('user') ||  interaction.user;
        const member = await interaction.guild.members.fetch(user.id)
        const icon = user.displayAvatarURL();
        const tag = user.tag

        const ember = new EmbedBuilder()
        .setColor("Blue")
        .setAuthor({name: tag, iconURL: icon})
        .setThumbnail(icon)
        .addFields({name: "Member", value: `${user} - ${member.displayName}`, inline: false})
        .addFields({name: "Roles", value: `${member.roles.cache.map(r => r).join(' ')}`, inline: false})
        .addFields({name: "Joined Server", value: `<t:${parseInt(member.joinedAt / 1000)}:R>`, inline: true})
        .addFields({name: "Joined Discord", value: `<t:${parseInt(user.createdAt / 1000)}:R>`, inline: true})
        .setFooter({text: `User ID : ${user.id}`})
        .setTimestamp()

        await interaction.reply({embeds: [ember]})
    }
});

client.on('messageCreate', message => {
    if (message.content === 'hello') {
        message.reply('yow')
    }
})



client.login(process.env.TOKEN)
