const getLocalCommands = require("../../utils/getLocalCommands");

module.exports = async (client, interaction) => {
    if (!interaction.isChatInputCommand()) return;
  
    const localCommands = getLocalCommands();
  
    try {
      const commandObject = localCommands.find(
        (cmd) => cmd.name === interaction.commandName
      );
  
      if (!commandObject) return;
  
      if (commandObject.permissionsRequired?.length) {
        for (const permission of commandObject.permissionsRequired) {
          if (!interaction.member.permissions.has(permission)) {
            await interaction.reply({
              content: 'Not enough permissions.',
              ephemeral: true,
            });
            return;
          }
        }
      }

      if (commandObject.botPermissions?.length) {
        for (const permission of commandObject.botPermissions) {
          const bot = interaction.guild.members.me;

          if (!bot.permissions.has(permission)) {
            await interaction.reply({
              content: "I don't have enough permissions.",
              ephemeral: true,
            });
            return;
          }
        }
      }

      await commandObject.callback(client, interaction);
    } catch (error) {
      console.error(error);
      const payload = { content: 'Something went wrong. Please try again later.' };
      interaction.deferred || interaction.replied
        ? await interaction.editReply(payload)
        : await interaction.reply({ ...payload, ephemeral: true });
    }
  };