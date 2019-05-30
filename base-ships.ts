class Spacecraft{

    constructor (public propulsor: string){}

    // Ao utilizar um membro da instância dentro da classe é preciso atribuir o 'this'
    jumpIntoHyperspace(){
        console.log(`Entering hyperspace with ${this.propulsor}`) 
    }
}

// Adicionar uma interface
interface ContainerShip  {
    cargoContainers: number
}

// Exporta a classe e a Interface
export { Spacecraft, ContainerShip }