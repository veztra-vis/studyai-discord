// Load environment variables from the .env file
require('dotenv').config();

const { Client, GatewayIntentBits, Events } = require('discord.js');

const DISCORD_TOKEN = process.env.DISCORD_TOKEN;

// Create the bot client with the required intents
const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.MessageContent
    ] 
});

// When the bot comes online
client.once(Events.ClientReady, c => {
    console.log(`Logged in as ${c.user.tag}`);
});

// Listen for messages from users
client.on(Events.MessageCreate, async message => {
    // Ignore messages sent by bots (including itself)
    if (message.author.bot) return;

    // Simple !ping command
    if (message.content.toLowerCase() === '!ping') {
        message.reply('Pong! 🏓');
    }
});

// Log the bot into Discord
client.login(DISCORD_TOKEN);
