let antwoordGoed = false
var readlineSync = require('readline-sync');

var vraagAntwoord = readlineSync.question('Wat is 5+5 ')


while(antwoordGoed == false){
    
       if (vraagAntwoord == 10) {
        antwoordGoed = true;    
        console.log("goed zo")
    } else {
        console.log("fout! probeer nog eens")
        var vraagAntwoord = readlineSync.question('Wat is 5+5 ') 
    }
}