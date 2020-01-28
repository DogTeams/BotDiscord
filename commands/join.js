const Command = require('./command')
module.exports = class Join extends Command{

    static match(message){
        return message.content.startsWith('!join')
    }

    static action(message){
        let args = message.content.split(' ')
        
        if (args[1] === 'MHW') {
            const role = message.guild.roles.find('name','MHW')
            message.reply('Tu as maintenant accès au channel dédié à '+ message.guild.channels.find(chanel => chanel.name === 'mhw').toString())
            message.member.addRole(role)
        }
        if (args[1]  === 'R6') {
            const role = message.guild.roles.find('name','r6')
            message.reply('Tu as maintenant accès au channel dédié à '+ message.guild.channels.find(chanel => chanel.name === 'rainbow').toString())
            message.member.addRole(role)
        }
        if (args[1]  === 'Diablo') {
            const role = message.guild.roles.find('name','Diablo')
            message.reply('Tu as maintenant accès au channel dédié à '+ message.guild.channels.find(chanel => chanel.name === 'diablo').toString())
            message.member.addRole(role)
        }
        if (args[1]  === 'Civ') {
            const role = message.guild.roles.find('name','Civ')
            message.reply('Tu as maintenant accès au channel dédié à '+ message.guild.channels.find(chanel => chanel.name === 'civ').toString())
            message.member.addRole(role)
        }
        if (args[1]  === 'Yu-Gi-Oh') {
            const role = message.guild.roles.find('name','Yu-Gi-Oh')
            message.reply('Tu as maintenant accès au channel dédié à '+ message.guild.channels.find(chanel => chanel.name === 'yu-gi-oh').toString())
            message.member.addRole(role)
        }
        if (args[1]  === 'Minecraft') {
            const role = message.guild.roles.find('name','Minecraft')
            message.reply('Tu as maintenant accès au channel dédié à '+ message.guild.channels.find(chanel => chanel.name === 'minecraft').toString())
            message.member.addRole(role)
        }
        if (args[1] === 'LoL') {
            const role = message.guild.roles.find('name','LoL')
            message.reply('Tu as maintenant accès au channel dédié à '+ message.guild.channels.find(chanel => chanel.name === 'lol').toString())
            message.member.addRole(role)
        }
    }

}