const Discord = require('discord.js');
var fs = require('fs')
let job =[
    ';1;0;50;10;40;20;10;50;combattant', //epeiste
    ';1;0;50;10;20;40;10;30;combattant', //voleur
    ';1;0;50;10;10;50;10;20;tireur', //ranger
    ';1;0;50;10;10;50;10;20;tireur', //ménestrel
    ';1;0;50;20;20;10;40;10;mage', //feu
    ';1;0;50;20;20;10;40;10;mage', //foudre
    ';1;0;50;20;20;20;40;10;mage', //eau
    ';1;0;50;20;10;10;40;30;mage', //terre
    ';1;0;50;20;20;20;40;20;mage'  //vent
    ]
module.exports = class FichePerso{
    Fiche(message){
        fs.readFile('data/' + message.author.id, 'utf8', function(err, contents) {
            if (err){
                console.log(err)
            }
            else{
                let args = contents.split(';')
                const Embed = new Discord.RichEmbed()
                .setColor(0xFFC300)
                .setTitle("Fiche Personnage")
                .setDescription("Nom: "+args[0]+"\nJob: "+args[1]+"\nNiv: "+args[2]+"\nExp: "+args[3]+"\nPV: "+args[4]+"\nPM: "+args[5]+"\nForce: "+args[6]+"\nAgilité: "+args[7]+"\nMagie: "+args[8]+"\nResistance: "+args[9])
                message.channel.send(Embed)
            }
        });
    }
    create(message, resultat){
        resultat = resultat+ this.job(resultat)
        fs.appendFile('data/' + message.author.id, resultat, function (err) {
            if (err){  
                console.log(err);
            }
            else{
                console.log('Saved!');
            }
          });
          return true
    }
    job(res){
        let args = res.split(";")
        var i
        switch(args[1]){
            case "epeiste":
                i = 0
            break;
            case "voleur":
                i = 1
            break;
            case "ranger":
                i = 2
            break;
            case "ménestrel":
                i = 3
            break;
            case "roublard":
                i = 4
            break;   
            case "feu":
                i = 5
            break;
            case "eau":
                i = 7
            break;     
            case "foudre":
                i = 6
            break;
            case "terre":
                i = 8
            break;
            case "vent":
                i = 9
            break;
        }
        return job[i]
    }
}