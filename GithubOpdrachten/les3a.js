function shake(woordDatGeschudtMoetWorden) {
  const characters = woordDatGeschudtMoetWorden.split('');
  for (let i = characters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [characters[i], characters[j]] = [characters[j], characters[i]];
  }
  const geschudWoord = characters.join('');
  return geschudWoord

}

let woord1 = shake("Appel");
let woord2 = shake("Boter");
let woord3 = shake("Tosti");
console.log(woord1);
console.log(woord2);
console.log(woord3);
