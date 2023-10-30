let nummer = 10000000;
let n1 = 0, n2 = 1, volgendeTerm;

console.log(n1); 
console.log(n2); 

volgendeTerm = n1 + n2;

while (volgendeTerm <= nummer) {

    
    console.log(volgendeTerm);

    n1 = n2;
    n2 = volgendeTerm;
    volgendeTerm = n1 + n2;
}