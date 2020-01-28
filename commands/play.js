const Command = require('./command')
const Youtube = require('youtube-audio-stream')
module.exports = class Play extends Command{

    static match(message){
        return message.content.startsWith('!play') || message.content.startsWith('!stop')
    }

    static action(message){
        if(message.content.startsWith('!play')){
            let args = message.content.split(' ')
            message.member.voiceChannel
            .join()
            .then(function(connection){
                try{
                    let stream = Youtube(args[1])
                    connection.playStream(stream).on('end',function(){
                        connection.disconnect()
                    })
                }
                catch (e){
                    message.reply('Le lien ne fonctionne pas :(')
                }
            })
        }
        if(message.content.startsWith('!stop')){
            message.member.voiceChannel
            .join()
            .then(function(connection){
            connection.disconnect()
            })
        }

    }

}