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

client.login(config.token);

// Este template foi inteiramente criado por ᝰ໋݊🌙⢿The.CatDark⣷ᥫ᭡#0990 (https://www.flownixr.repl.co) (eu mesmo) e distribuído publicamente para usuários que gostam e/ou gostariam de modificar certas áreas do Discord (https://discord.com). Espero que aproveitem os recursos.
