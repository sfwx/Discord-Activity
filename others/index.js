const discord = require('discord.js-selfbot-v11');
const client = new discord.Client();
const config = require('./status.json');
const fs = require('fs');
const events = fs.readdirSync('./events/');
events.forEach(file => {
  const eventname = file.split('.')[0];
  const event = require(`./events/${file}`);
client.on(eventname, event.bind(null, client));
});

client.login(process.env.token);
