let antwoordGoed = false
var readlineSync = require('readline-sync');

hetGetal = Math.floor(Math.random() * 101);
console.log(hetGetal)
var vraagAntwoord = readlineSync.question('Wat is het getal? (tussen 0 en 100) ')

while(antwoordGoed == false){
    
  if (vraagAntwoord < hetGetal) {
    console.log("Het antwoord is hoger")
  } else {
    console.log("Het antwoord is lager")
  }    
    
    if (vraagAntwoord == hetGetal) {
        antwoordGoed = true;    
        console.log("Dat is goed!")
        break;
    } else {
        console.log("fout! probeer nog eens")
         vraagAntwoord = readlineSync.question('Wat is het getal? (tussen 0 en 100) ') 
    }
}

