const Command = require('./command')
module.exports = class De extends Command{

    static match(message){
        return message.content.startsWith('!d')
    }

    static action(message){
        let args = message.content.split(' ')
        
        if(args.length === 2 || args.length === 4){
            const min = Math.ceil(1)
            const max = Math.floor(args[1])
            var total = new Array()
            var re = message.member.user + '``` #d'+args[1]+ '\nDetails: '
            total[0]=Math.floor(Math.random()*(max-min+1))+min
            re += total[0]
            if(message.content[message.content.search(/[+]/g)]==='+'){
                total[1] = Math.floor(args[3])
                re = re + ' + ' + args[3]
            }
            if(message.content[message.content.search(/[-]/g)]==='-'){
                total[1] = Math.floor(-args[3])
                re = re + ' - ' + args[3]
            }
            message.channel.send(re + ' Total(' +this.total(total) + ')```')
            message.delete()
        }
        if(args.length === 3 || args.length === 5){
            var re = message.member.user + '``` #'+args[1]+'d'+ args[2] + ' \nDetails: '
            var total = new Array()
            for(var i = 0; i < args[1] ; i++){
                const min = Math.ceil(1)
                const max = Math.floor(args[2])
                total[i] = Math.floor(Math.random()*(max-min+1))+min
                re = re + total[i] + ', '
            }
            if(message.content[message.content.search(/[+]/g)]==='+'){
                total[total.length]= Math.floor(args[4])
                re = re + '+ ' + args[4]
            }
            if(message.content[message.content.search(/[-]/g)]==='-'){
                total[total.length]= Math.floor(-args[4])
                re = re + '- ' + args[4]
            }
            message.channel.send(re + 'Total('+this.total(total)+ ')```')
            message.delete()
        }
    }
     static total(tab){
        var result = 0
        for(var i = 0; i<tab.length;i++){
            result += tab[i]
        }
        return result
    }
}