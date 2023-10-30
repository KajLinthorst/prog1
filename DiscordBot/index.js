// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers, ] });

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
function ClientIsReady(c){
    console.log("Logged in as: " + c.user.tag);
}

function OnMessage(message){
    if (message.author.bot == false){
        if (message.content == "hallo botkes" ){
            const channel = client.channels.cache.get('1159823742713745531');
            channel.send("Hallo " + message.author.username + "!")
        }
        
    }
  
    //console.log(message.author.username + " : " + message.content);
}

client.once(Events.ClientReady, ClientIsReady);
client.on(Events.MessageCreate, OnMessage)
// Log in to Discord with your client's token
client.login(token);