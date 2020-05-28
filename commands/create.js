const Discord = require('discord.js');
const Command = require('./command')
const jobController = require('../game/controller/controller')
const fiche = require('../game/controller/FichePerso')
const systemCombat = require('../game/controller/systemCombat')

var fs = require('fs')
var id
var bool = true
module.exports = class Create extends Command{

    static match(message){
        return message.content.startsWith('!fiche')||message.content.startsWith('!create') || message.content.startsWith('!combat')
    }

    static action(message){
        
        if(message.content.startsWith('!fiche')){
            let test = new fiche
            test.Fiche(message)
        }
        if(message.content.startsWith('!create')){
            fs.readFile('data/' + message.author.id, 'utf8', function(err, contents) {
                if(err || contents == ""){
                    if(bool){
                        bool = false
                        const Embed = new Discord.RichEmbed()
                        .setColor(0xFF0000)
                        .setTitle("ATTENTION")
                        .setDescription("La création de fiche ne peut pas se faire en même temps.\nDonc merci de bien le faire un par un.\nPour continuer rentré la commande `!create` ensuite pour chaque demande votre réponse devra commencer par la commande suivi de votre réponse\n`!create votre-réponse`.")
                        message.channel.send(Embed)
                        id = message.author.id
                    }
                    else if(!bool&&id==message.author.id){
                        var test = new jobController
                        test.create(message)
                        bool = test.isEnds()
                    }
                    else if(!bool && id!=message.author.id){
                        message.channel.send("MERCI D'ATTENDRE TON TOUR")
                    }
                }
                else{
                    const Embed = new Discord.RichEmbed()
                    .setColor(0xFF0000)
                    .setTitle("ERREUR")
                    .setDescription("Vous avez déjà une fiche de personnage merci bien.")
                    message.channel.send(Embed)
                }

            });
        }
        if(message.content.startsWith('!combat')){
            let test = new systemCombat
            test.simulation(message)
        }
        
    }

    /*static lire(message){
        fs.readFile('data/' + message.author.id, 'utf8', function(err, contents) {
            if (err) throw err;
            message.channel.send(contents);
        });
    }
    static ecrire(message, content){
        fs.appendFile('data/' + message.author.id, content, function (err) {
            if (err) throw err;
            console.log('Saved!');
          });
    }*/

}