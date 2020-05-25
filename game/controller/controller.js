const Discord = require('discord.js');
const fiche = require('./FichePerso')
var num = 0
var resultat = ""
var isEnds = false
module.exports = class Controller{
    jobCreate(message){
        let args = resultat.split(';')
        switch(args[1]){
            case "epeiste":
            {
                let test = new fiche
                isEnds = test.create(message, resultat)
                console.log("Épéiste create!")
                test.Fiche(message)
                return true
            }
            break;
            case "voleur":
            {
                let test = new fiche
                isEnds = test.create(message, resultat)
                console.log("Voleur create!")
                test.Fiche(message)
                return true
            }
            break;
            case "ranger":
            {
                let test = new fiche
                isEnds = test.create(message, resultat)
                console.log("Ranger create!")
                test.Fiche(message)
                return true
            }
            break;
            case "ménestrel":
            {
                let test = new fiche
                isEnds = test.create(message, resultat)
                console.log("Ménestrel create!")
                test.Fiche(message)
                return true
            }
            break;
            case "roublard":
            {
                let test = new fiche
                isEnds = test.create(message, resultat)
                console.log("Roublard create!")
                test.Fiche(message)
                return true
            }
            break;   
            case "feu":
            {
                let test = new fiche
                isEnds = test.create(message, resultat)
                console.log("Mage feu create!")
                test.Fiche(message)
                return true
            }
            break;
            case "eau":
            {
                let test = new fiche
                isEnds = test.create(message, resultat)
                console.log("Mage eau create!")
                test.Fiche(message)
                return true
            }
            break;     
            case "foudre":
            {
                let test = new fiche
                isEnds = test.create(message, resultat)
                console.log("Mage foudre create!")
                test.Fiche(message)
                return true
            }
            break;
            case "terre":
            {
                let test = new fiche
                isEnds = test.create(message, resultat)
                console.log("Mage terre create!")
                test.Fiche(message)
                return true
            }
            break;
            case "vent":
            {
                let test = new fiche
                isEnds = test.create(message, resultat)
                console.log("Mage vent create!")
                test.Fiche(message)
                return true
            }
            break;
            default:
                return false
            break;
        }
    }
    create(message){
        num+=1
        switch(num){
            case 1:
            {
                const Embed = new Discord.RichEmbed()
                .setColor(0x0000FF)
                .setTitle("Création d'une fiche pour "+message.member.nickname)
                .setDescription("Afin de créer votre fiche de personnage merci bien de saisir un nom de personnage.\n`!create votre-nom`")
                message.channel.send(Embed)
                isEnds = false
                resultat = ""
            }
            break;
            case 2:
            {
                let args = message.content.split(' ')
                resultat = resultat + args[1]
                const Embed = new Discord.RichEmbed()
                .setColor(0x0000FF)
                .setTitle("Création d'une fiche pour "+message.member.nickname)
                .setDescription("Choisser un classe par rapport à celle proposer:\n - Corps à corps: Épéiste ou Voleur\n - Distance: Ranger ou Ménestrel\n - Mage: Mage feu / Mage foudre / Mage eau / Mage terre / Mage vent\nATTENTION pour rentré votre réponse elle doit être minuscule et sans accents et pour les mages indiquer uniquement l'élément voulu\nCe système peut être ammené a changer dans l'avenir\nExemple:\n`!create epeiste` `!create ranger` `!create feu`")
                message.channel.send(Embed)
            }
            break;
            case 3:
            {
                let args = message.content.split(' ')
                resultat = resultat + ';' + args[1]
                if(this.jobCreate(message)){
                    num=0
                }
                else{
                    let args = resultat.split(';')
                    resultat = args[0]
                    num=2
                    const Embed = new Discord.RichEmbed()
                    .setColor(0x0000FF)
                    .setTitle("ERREUR")
                    .setDescription("Réessayer")
                    message.channel.send(Embed)
                }
            }
            break;
        }
    }
    isEnds(){
        return isEnds
    }
}