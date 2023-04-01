module.exports = {
    name: 'ping',
    description: 'Pings the bot and shows the latency',

    //execute
    callback: async (client, interaction) => {
        await interaction.deferReply();

        const reply = await interaction.fetchReply();

        const ping =  reply.createdTimestamp - interaction.createdTimestamp;

        interaction.editReply(`Latency is ${ping}ms. API Latency is ${Math.round(client.ws.ping)}ms`);  
    }
}