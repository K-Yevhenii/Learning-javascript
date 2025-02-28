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
