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

client.login(process.env.TOKEN)
