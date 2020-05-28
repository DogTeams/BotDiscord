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

module.exports = class systemCombat{
    simulation(message){
        if(debut){
            message.channel.send("Ce combat est une simulation de ce que pourrais donner le bot a l'avenir ^^ `!combat` pour continuer")
            id = message.author.id
            this.newJoueur(message)
            debut = false
            tour = 0
            ePv = 50
        }
        else if(!debut && id == message.author.id){
            if(Tour){
                tour +=1
                switch(tour){
                    case 1:
                        message.channel.send("C'est votre tour. Vous avez plusieurs action disponible. `!combat attaque` `!combat competence` `!combat fuir`")
                        this.de()
                    break;
                    case 2:
                        this.action(message)
                        tour = 1
                        Tour = false
                }
            }
            if(!Tour){
                const min = Math.ceil(1)
                const max = Math.floor(50)
                var res = Math.floor(Math.random()*(max-min+1))+min
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
                    message.channel.send("L'ennemie attaque")
                    if(myEsquive<eDegat){
                        myPv = myPv - res
                        message.channel.send("Tu reçoit un coup bien placer. Vos pv restant: "+myPv)
                    }
                    else{
                        message.channel.send("Belle esquive. Vos pv restant: "+myPv)
                    }
                    message.channel.send("`!combat attaque` `!combat competence` `!combat fuir`")
                    this.de()
                }
                Tour = true
            }
            if(ePv<=0 || myPv<=0){
                message.channel.send("Fin du combat!!!")
                debut = true
            }
        }
    }

    action(message){
        let args = message.content.split(' ')
        switch(args[1]){
            case "attaque":
                message.channel.send("Vous attaquer: "+myDegat)
            break;
            case "riposte":
                message.channel.send("pas encore disponible")
            break;
            case "fuir":
                message.channel.send("pas encore disponible")
            break;
        }
    }
    de(){
        switch(myCatégorie){
            case "mage":
                myDegat = Math.floor(Math.random()*(myMagie-1+1))+1
            break
            case "combattant":
                myDegat = Math.floor(Math.random()*(myForce-1+1))+1
            break
            case "tireur":
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