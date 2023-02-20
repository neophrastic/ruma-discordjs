module.exports = {
    name: 'ping',
    description: 'Pings the bot and shows the latency',

    //execute
    callback: (client, interaction) => {
        interaction.reply(`Latency is ${Date.now() - interaction.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);  
    }
}