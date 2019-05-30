"use strict";
exports.__esModule = true;
var base_ships_1 = require("./base-ships");
var starfighter_1 = require("./starfighter");
// Instanciando a classe
var ship = new base_ships_1.Spacecraft('hyperdrive');
ship.jumpIntoHyperspace();
// Instanciando a classe MilleniumFalcon
var falcon = new starfighter_1.MilleniumFalcon();
falcon.jumpIntoHyperspace();
// Declaração de uma função que recebe uma interface como parâmetro
var goodForTheJob = function (ship) { return ship.cargoContainers > 2; };
console.log("Is falcon good for the job? " + (goodForTheJob(falcon) ? 'YES' : 'NO'));
