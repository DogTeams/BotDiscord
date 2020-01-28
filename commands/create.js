const Command = require('./command')
class Create extends Command{

    match(message){
        return message.content.startsWitch('!create')
    }

    action(message){
        let args = message.content.split(' ')
        args.shift()


    }

}