module.exports = class command{
    static parse (message, bot){
        if(this.match(message)){
            this.action(message, bot)
            return true
        }
        return false
    }

    match(message){
        return message.content.startsWith('!prefix')
    }

    action(message, bot){
        let args = message.content.split(' ')
        bot.on('ready',function(){
            bot.user.setGame(args[1])
            .then(() => console.log('status mise a jour'))
            .catch(console.error)
        })
    }

}