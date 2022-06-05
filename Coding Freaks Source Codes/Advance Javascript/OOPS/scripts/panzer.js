import { Vehicles } from './Vehicle.js'

class Rhino extends Vehicles {
    constructor() {
        super();
        console.log("Panzer")
    }

    Cannon() {
        console.log("Beware My Enemies")
    }
}

export const panzer = new Rhino();
// panzer.start()
// panzer.stop()
// panzer.BigBang()
