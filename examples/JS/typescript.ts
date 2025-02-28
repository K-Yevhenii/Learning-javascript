type SumFn = (a: number, b: number) => number;

const sum = (a: number, b: number): number => {
  return a + b;
};

sum(1, 2);

const b: string = "abc";
const c: null = null;
const d: boolean = true;

const e: object = {};
const f: Function = () => {};

type MyType = string;

const g: MyType = "str";
const h: MyType = "another string";

type AnotherType = string | null;

const i: AnotherType = null;
const k: AnotherType = "dasda";
const l: AnotherType = 123;

type TrafficLightColor = "red" | "green" | "yellow"; // Union type

function logTrafficLight(light: TrafficLightColor) {
  console.log(light);
}

logTrafficLight("yellow");

// Object type
type Product = {
  id: number;
  name: string;
  price: number;
};

const product: Product = {
  id: 1,
  name: "Banana",
  price: 20,
};

const anotherProduct: Product = {
  id: 2,
  name: "Milk",
  price: 12,
};

interface IPotion {
  name: string;
  owner: null;
}

const potion: IPotion = {
  name: "Health potion",
  owner: null,
};

const arr = [1, 2, 3];
const summed = arr.reduce<number>((acc, current) => acc + current, 0);

function logElements<T>(arr: Array<T>) {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);
  }
}

logElements<number>([1, 2, 3]);
logElements<string>(["1", "2", "3"]);
logElements<boolean>([true, false, true]);

// interface ICoffeeMachine {
//   capacity: number;
//   boil: () => void;
//   addWater: (amount: number) => void;
// }

// interface Gadget {
//   power: number;
//   turnOn: () => void;
//   turnOff: () => void;
// }

// class CoffeeMachine implements ICoffeeMachine, Gadget {
//   capacity = 300;
//   power = 220;

//   private water: number;

//   constructor() {
//     this.water = 0;
//   }

//   boil() {
//     console.log("Boiling");
//     console.log("Boiled");
//   }

//   addWater(amount: number) {
//     this.water += amount;
//   }

//   turnOff() {}

//   turnOn() {}
// }

// class AnotherCoffeeMachine implements ICoffeeMachine {}

// const coffeeMachine = new CoffeeMachine();
// coffeeMachine.addWater(220);
// coffeeMachine.boil();
// console.log(coffeeMachine.capacity);

// class User {
//   private password;
//   protected email;
//   public readonly username: string;
//   // or can be written as username: string without `public`

//   constructor(password, username, email) {
//     this.password = password;
//     this.username = username;
//     this.email = email;
//   }

//   logPassword() {
//     console.log(this.password);
//   }
// }

// const user = new User("12345567", "John", "john@doe.com");

// console.log(user.password); // Will raise error
// console.log(user.email); // Will raise error
// console.log(user.username); // Ok

// class Employee extends User {
//   logEmail() {
//     console.log(this.email); // Ok
//   }

//   updatePassword(newPassword) {
//     this.password = newPassword; // Will raise error because `password` exists only in User type
//   }
// }

// const employee = new Employee("Qwerty123!", "Joe");
// console.log(employee.email); // Will raise error
