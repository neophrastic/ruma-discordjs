const { Client, IntentsBitField } = require('discord.js');
const eventHandlers = require('./handlers/eventHandlers');
require('dotenv/config')

const client = new Client({
    intents : [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
})

eventHandlers(client)

client.login(process.env.TOKEN).catch((error) => {
    console.error('Failed to log in. Check your TOKEN in .env:', error.message);
    process.exit(1);
});
