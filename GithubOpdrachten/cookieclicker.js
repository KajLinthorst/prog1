var readlineSync = require('readline-sync');
let gameisRunning = true
let score = 0;

while(gameisRunning){
  if (score < 999999999) {
    
    clickVraag()
  } else {
    console.log("Game Over! Je score is: " + score)
    gameisRunning = false;
  }
}


function clickVraag(){
    askClick = ['CONFIRM'],
    askIndex = readlineSync.keyInSelect(askClick, 'Wilt u klikken?');
    console.log("  ______")
    console.log(" / .   .\")
    console.log("| . . .  |")
    console.log(" \______/")
  
    if (askIndex == 0) {
        score++;
        console.log("Score +1!")
        console.log("Huidige Score: " + score + "!")
        
    } else {
      console.log("Game Over! Je score is: " + score)
      gameisRunning = false;
    }
}