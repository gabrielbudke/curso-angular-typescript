import {Spacecraft, ContainerShip} from './base-ships'

// Criando uma classe que extendo a classe Spacecraft 
export class MilleniumFalcon extends Spacecraft implements ContainerShip {
    
    cargoContainers: number

    constructor() {
        super('hyperdrive')
        this.cargoContainers = 2
    }

    // Sobrescrever o método 
    jumpIntoHyperspace(){
        if(Math.random() >= 0.5){
            // Chamando o método da classe pai
            super.jumpIntoHyperspace()
        } else {
            console.log('Failed to jump into hyperspace')
        }
    }
}