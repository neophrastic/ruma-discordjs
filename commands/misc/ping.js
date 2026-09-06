module.exports = {
    name: 'ping',
    description: 'Pings the bot and shows the latency',

    //execute
    callback: async (client, interaction) => {
        try {
            await interaction.deferReply();

            const reply = await interaction.fetchReply();

            const ping =  reply.createdTimestamp - interaction.createdTimestamp;

            await interaction.editReply(`Latency is ${ping}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
        } catch (error) {
            console.error(error);
            const payload = { content: 'Something went wrong. Please try again later.' };
            interaction.deferred || interaction.replied
                ? await interaction.editReply(payload)
                : await interaction.reply({ ...payload, ephemeral: true });
        }
    }
}