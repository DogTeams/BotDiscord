const Command = require('./command')
module.exports = class Invite extends Command{

    static match(message){
        return message.content.startsWith('!invite')
    }

    static action(message){
        let args = message.content.split(' ')
        if (args[1] === 'mhw') {
            message.channel.send(message.member.nickname + ' a posté une quête. Prenez vos armes, mangez bien et venez chasser. ' + message.guild.roles.find('name','MHW'))
        }
        if (args[1] === 'civ') {
            message.channel.send(message.member.nickname + " s'impose sur la scène mondiale, le laisserez vous faire ? "+ message.guild.roles.find('name','Civ'))
        }
        if (args[1] === 'minecraft') {
            message.channel.send(message.member.nickname + ' ne veut pas miner seul. ' + message.guild.roles.find('name','Minecraft'))
        }
        if (args[1] === 'lol') {
            message.channel.send(message.member.nickname + " a rejoint la faille de l'invocateur. " + message.guild.roles.find('name','LoL'))
        }
        if (args[1] === 'r6') {
            message.channel.send(message.member.nickname + " rejoint l'escouade K.R.P. VIENDEZ ^^ " + message.guild.roles.find('name','r6'))
        }
        if (args[1] === 'diablo') {
            message.channel.send(message.member.nickname + " demmande aux Nephilim de le rejoindre " + message.guild.roles.find('name','Diablo'))
        }
        if (args[1] === 'yugi') {
            message.channel.send(message.member.nickname + " active ça trap card !!! A TOI D'JOUER " + message.guild.roles.find('name','Yu-Gi-Oh'))
        }
        if (args[1] === 'bite') {
            message.channel.send(message.member.nickname + " est vraiment con d'avoir essayé.")
        }
    }

}
