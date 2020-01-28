const Discord = require('discord.js')
require('dotenv').config()
const bot = new Discord.Client()
const De = require('./commands/de')
const Play = require('./commands/play')
const Join = require('./commands/join')
const Dog = require('./commands/dog')
const Invite = require('./commands/invite')

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
})

bot.login(process.env.LOGIN)
//NjQ1MjQ4Njg3Njg1MjM4ODE1.XjCxpQ.s23YgPbfuenVpJsX0BC4R0iMreE
//process.env.BOT_TOKEN