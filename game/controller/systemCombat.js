var fs = require('fs')
var ePv
var eDegat = 50
var myDegat
var debut = true
var Tour = true
var tour

//donnée Brute du joueur
var id
var myPv
var myPm
var myForce
var myAgi
var myMagie
var myResis
var myCatégorie

//const action
const prefix = "combat"
const action1 = "attaque"
const action2 = "competences"
const action3 = "fuir"

//const catégories
const catégories1 = "mage"
const catégories2 = "combattant"
const catégories3 = "tireur"

module.exports = class systemCombat{
    simulation(message){
        if(debut){
            message.channel.send("Ce combat est une simulation de ce que pourrais donner le bot a l'avenir ^^ `!" + prefix + "` pour continuer")
            id = message.author.id
            this.newJoueur(message)
            debut = false
            tour = 0
            ePv = 50
        }
        else if(!debut && id == message.author.id){
            tour +=1
            switch(tour){
                case 1:
                    message.channel.send("C'est votre tour. Vous avez plusieurs action disponible. `!" + prefix + " " + action1 + "` `!" + prefix + " " + action2 + "` `!" + prefix + " " + action3 + "`")
                    this.de()
                break;
                case 2:
                    this.action(message)
                    
                break;
            }
            if(ePv<=0 || myPv<=0){
                message.channel.send("Fin du combat!!!")
                debut = true
            }
        }
        else if(id != message.author.id){
            message.channel.send("Le système n'est pas encore prét à faire plusieurs combats à la fois merci d'attendre la fin de la simulation")
        }
    }

    action(message){
        let args = message.content.split(' ')
        switch(args[1]){
            case action1:
                message.channel.send("Vous attaquer: "+myDegat)
                tour = 1
                Tour = false
                const min = Math.ceil(1)
                const max = Math.floor(10)
                var res = Math.floor(Math.random()*(50-min+1))+min
                if(res<myDegat){
                    ePv = ePv - myDegat
                    message.channel.send("L'attaque à réussie. PV ennemie restant: "+ ePv)
                }
                else{
                        message.channel.send("L'attaque à échouer. PV ennemie restant: "+ ePv)
                }
                if(ePv>0){
                    var eDegat = Math.floor(Math.random()*(max-min+1))+min
                    var myEsquive = Math.floor(Math.random()*(myResis-min+1))+min
                    message.channel.send("L'ennemie attaque: " + eDegat)
                    if(myEsquive<eDegat){
                        myPv = myPv - eDegat
                        message.channel.send("Tu reçoit un coup bien placer. Vos pv restant: "+myPv)
                    }
                    else{
                        message.channel.send("Belle esquive. Vos pv restant: "+myPv)
                    }
                    if(myPv>0){
                        message.channel.send("`!" + prefix + " " + action1 + "` `!" + prefix + " " + action2 + "` `!" + prefix + " " + action3 + "`")
                    }
                    this.de()
                }
            break;
            case action2:
                message.channel.send("pas encore disponible")
                tour-=1 // a enlever quand dispo
            break;
            case action3:
                message.channel.send("pas encore disponible")
                tour-=1 // a enlever quand dispo
            break;
            default:
                message.channel.send("Error: la commande entré est éroné. Réessaye\n`!" + prefix + " " + action1 + "` `!" + prefix + " " + action2 + "` `!" + prefix + " " + action3 + "`")
                tour-=1
            break;
        }
    }
    de(){
        switch(myCatégorie){
            case catégories1:
                myDegat = Math.floor(Math.random()*(myMagie-1+1))+1
            break
            case catégories2:
                myDegat = Math.floor(Math.random()*(myForce-1+1))+1
            break
            case catégories3:
                myDegat = Math.floor(Math.random()*(myAgi-1+1))+1
            break
        }
    }
    newJoueur(message){
        fs.readFile('data/' + message.author.id, 'utf8', function(err, contents) {
            let test = contents.split(';')
            myPv = test[4]
            myPm = test[5]
            myForce = test[6]
            myAgi = test[7]
            myMagie = test[8]
            myResis = test[9]
            myCatégorie = test[10]
        });
    }
}

/*fs.readFile('data/' + message.author.id, 'utf8', function(err, contents) {
    if (err){
        console.log(err)
    }
    else{
        let args = contents.split(';')
        myForce = args[6]
        const min = Math.ceil(1)
        const max = Math.floor(args[6])
        var res = Math.floor(Math.random()*(max-min+1))+min
        console.log(res)
        pven -= res
        if(pven < 0){
            message.channel.send("is dead")
            pven = 50
        }
        else if(pven > 0){
            message.channel.send(pven)
        }
    }
});*/