import { Vehicles } from './Vehicle.js'

class Stinger extends Vehicles  {
    constructor() {
        super();
        console.log("Stinger")
    }
    racingCar() {
        console.log('Its a racing car')
    }
}

export let sting = new Stinger();
