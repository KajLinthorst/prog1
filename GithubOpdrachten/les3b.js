function berekenKubusinhoud(){
  console.log('De kubus heeft een inhoud van: ' + k_lengte * k_breedte * k_hoogte)
}


let k_hoogte = 5;
let k_breedte = 6;
let k_lengte = 5;

berekenKubusinhoud()


function berekenCylinderinhoud(){
  let berekeningCylinder = c_radius^2 * π * c_hoogte;
  console.log('De cylinder heeft een inhoud van: ' + berekeningCylinder);
  
}


let π = 3.14;
let c_radius = 5;
let c_hoogte = 20; 
let antwoordCylinder = berekenCylinderinhoud();
console.log(antwoordCylinder);


function berekenDriehoek(){
  let berekeningDriehoek = c_kant1^2 + c_kant2^2;
  console.log("De lengte van de driehoekzijde is: " + berekeningDriehoek)
  
}

let c_kant1 = 6;
let c_kant2 = 5;

let antwoordDriehoek = berekenDriehoek();
console.log(antwoordDriehoek);


function gemiddeldeGetallen(){
  let berekeninggemiddeldeGetallen = (gemiddeldeGetallen / 7 );
  console.log("Het gemiddelde van de 7 getalen is: " + berekeninggemiddeldeGetallen)
}

gemiddeldeGetallen(4, 6, 12, 32, 21, 88, 73);