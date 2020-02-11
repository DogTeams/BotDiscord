const Discord = require('discord.js')
require('dotenv').config()
const bot = new Discord.Client()
const De = require('./commands/de')
const Play = require('./commands/play')
const Join = require('./commands/join')
const Dog = require('./commands/dog')
const Invite = require('./commands/invite')
const MHW = require('./commands/mhw')

bot.on('ready',function(){
    bot.user.setGame('Test')
    .then(() => console.log('status mise a jour'))
    .catch(console.error)
})

bot.on('message', function (message){
    De.parse(message)
    Play.parse(message)
    Join.parse(message)
    Dog.parse(message)
    Invite.parse(message)
    MHW.parse(message)
})

bot.login(process.env.LOGIN)
