import { Spacecraft, ContainerShip } from './base-ships'
import { MilleniumFalcon } from './starfighter'

import * as _ from 'lodash'
console.log(_.pad('Typescript Examples', 40, '='))


// Instanciando a classe
let ship = new Spacecraft('hyperdrive')
ship.jumpIntoHyperspace()

// Instanciando a classe MilleniumFalcon
let falcon = new MilleniumFalcon()
falcon.jumpIntoHyperspace()

// Declaração de uma função que recebe uma interface como parâmetro
let goodForTheJob = ( ship: ContainerShip ) => ship.cargoContainers > 2

console.log(`Is falcon good for the job? ${goodForTheJob(falcon) ? 'YES' : 'NO'}`)

