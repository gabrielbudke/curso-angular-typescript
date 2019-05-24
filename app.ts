// Declaração de varável tipo: string
let message: string = "Help me, Obi-Wan Kenobi. You're my only hope!";
console.log(message)

// Declaração de variável tipo: number
let episode: number = 4
console.log("This is episode " + 4)
episode = episode + 1
console.log("Nex episode is " + episode)

// Declaração de varável sem tipo
let favoriteDroid: string
favoriteDroid = 'BB-8'
console.log("My favorite droid is " + favoriteDroid)

// Declaração de função com retorno = number
let isEnoughToBeatMF = function (parsecs: number) : boolean {
    return parsecs < 12
}

let distance = 11
console.log(`Is ${distance} parsecs enough to beat Millennium Falcon? ${isEnoughToBeatMF(distance) ? 'YES' : 'NO'}`)

// Atribuição de uma função à uma variável
let call = (name: string) => console.log(`Do you copy, ${name}`)
call('R2')

// Declaração de uma função com parâmetro padrão
function inc (speed: number, inc: number = 1) : number {
    return speed + inc
}

console.log(`inc(5, 1) = ${inc(5, 5)}`)
console.log(`inc(5) = ${inc(5)}`)

