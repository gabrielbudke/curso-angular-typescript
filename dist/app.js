// Declaração de varável tipo: string
var message = "Help me, Obi-Wan Kenobi. You're my only hope!";
console.log(message);
// Declaração de variável tipo: number
var episode = 4;
console.log("This is episode " + 4);
episode = episode + 1;
console.log("Nex episode is " + episode);
// Declaração de varável sem tipo
var favoriteDroid;
favoriteDroid = 'BB-8';
console.log("My favorite droid is " + favoriteDroid);
// Declaração de função com retorno = number
var isEnoughToBeatMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 11;
console.log("Is " + distance + " parsecs enough to beat Millennium Falcon? " + (isEnoughToBeatMF(distance) ? 'YES' : 'NO'));
// Atribuição de uma função à uma variável
var call = function (name) { return console.log("Do you copy, " + name); };
call('R2');
// Declaração de uma função com parâmetro padrão
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("inc(5, 1) = " + inc(5, 5));
console.log("inc(5) = " + inc(5));
