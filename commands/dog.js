const Command = require('./command')
module.exports = class Dog extends Command{

    static match(message){
        return message.content.startsWith('!dog')
    }

    static action(message){
        const join = 'Toute les commandes commençant par !join vous octroie la permission de rejoindre les channel dédié à la commande:\n'
        const mh = ' !join MHW ; '
        const r6 = ' !join R6 ; '
        const diablo = ' !join Diablo ; '
        const civ5 = ' !join Civ ; '
        const yugi = ' !join Yu-Gi-Oh ; '
        const Mine = ' !join Minecraft ; '
        message.channel.send('```Voici les différentes commandes:\n'+join + mh + r6 + diablo + civ5 + yugi + Mine +"\nFaire une demmande d'invitation:\n !invite mhw ; !invite r6 ; !invite diablo ; !invite civ ; !invite yugi ; !invite minecraft\nLancer un dé:\n !d 'nb' ; !d 'nb + nb' ; !d 'nb - nb' ; !d 'nb nb' ; !d 'nb nb + nb' ; !d 'nb nb - nb'```")
    }

}