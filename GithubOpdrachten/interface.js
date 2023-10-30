let readline = require("readline-sync");
let hp, attack, dialogue1, dialogue2, dialogue3, dialogue4;
hp = 99;
attack = 25;
dialogue1 = "Jij loopt door een donker bos, opeens wordt je tegengehouden"
dialogue2 = "Een skelet komt tevoorschijn en daagd je uit op een gevecht"
dialogue3 = "Je struikelt over een steen"
dialogue4 = "Je valt en verliest 4HP"


function addSpaces(txt, len){
    let output = txt.toString();
    while (output.length < len){
        output += " ";
    }
    return output;
}

function drawInterface(){
    console.log("                                                                                                                        ");
    console.log("                                                                                                                        ");
    console.log(" _____________    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX   ____________________ ");
    console.log(" |  {STATS}  |    X                                                                            X   |    [COMMANDS]    | ");
    console.log(" | HP: " + addSpaces(hp,6) +"|    X                                                                            X   |                  | ");
    console.log(" | ATK: " + addSpaces(attack,5 ) +"|    X                                                                            X   |                  | ");
    console.log(" |___________|    X                                                                            X   | <attack>         | ");
    console.log("                  X                                                                            X   |                  | ");
    console.log("                  X                                                                            X   | <block>          | ");
    console.log(" ______________   X                                                                            X   |                  | ");
    console.log(" |  {BUFFS}   |   X                                                                            X   | <heal>           | ");
    console.log(" |            |   X                                                                            X   |                  | ");
    console.log(" |  ATK+      |   X                                                                            X   | <run>            | ");
    console.log(" |            |   X                                                                            X   |                  | ");
    console.log(" |  DEF+      |   X                                                                            X   |                  | ");
    console.log(" |            |   X                                                                            X   |                  | ");
    console.log(" |            |   X                                                                            X   |                  | ");
    console.log(" |            |   X                                                                            X   |                  | ");
    console.log(" |____________|   XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX   |__________________| ");
    console.log("                                                                                                                        ");
    console.log(" ______________________________________________________________________________________________________________________ ");
    console.log(" | " + addSpaces(dialogue1,115) + "| ");
    console.log(" | " + addSpaces(dialogue2,115) + "| ");
    console.log(" | " + addSpaces(dialogue3,115) + "| ");
    console.log(" | " + addSpaces(dialogue4,115) + "| ");
    console.log(" |____________________________________________________________________________________________________________________| ");
    console.log("                                                                                                                        ");
    console.log("                                                                                                                        ");
    console.log("                                                                                                                        ");
     
}

drawInterface()
let answer = readline.question("");



