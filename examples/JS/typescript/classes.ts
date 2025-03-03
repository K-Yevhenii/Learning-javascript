interface ICoffeeMachine {
  capacity: number;
  boil: () => void;
  addWater: (amount: number) => void;
}

interface Gadget {
  power: number;
  turnOn: () => void;
  turnOff: () => void;
}

export class CoffeeMachine implements ICoffeeMachine, Gadget {
    capacity = 300;
    power = 220;

    private water: number;

    constructor() {
        this.water = 0;
    }

    boil() {
        console.log('Boiling');
        console.log('Boiled');
    }

    addWater(amount: number) {
        this.water += amount;
    }

    turnOff() {}

    turnOn() {}
}
