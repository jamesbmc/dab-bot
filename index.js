var secrets = require('./auth.json')

const token = secrets.token
const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
    msg.react(msg.guild.emojis.get('535958853519540233'))
    .catch(console.error);
})

client.login(token)
