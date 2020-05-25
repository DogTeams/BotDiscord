const Discord = require('discord.js')
require('dotenv').config()
const bot = new Discord.Client()
const De = require('./commands/de')
const Join = require('./commands/join')
const Dog = require('./commands/dog')
const Invite = require('./commands/invite')
const Create  = require('./commands/create')

bot.on('ready',function(){
    bot.user.setGame('Nouvelle fonctionnalité en cours')
    .then(() => console.log('status mise a jour'))
    .catch(console.error)
})

bot.on('message', function (message){
    De.parse(message)
    Join.parse(message)
    Dog.parse(message)
    Invite.parse(message)
    Create.parse(message)
})

bot.login(process.env.LOGIN)
