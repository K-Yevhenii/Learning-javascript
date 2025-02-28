# TypeScript

- Compile time - i.e. translation TS file in JS and type checking
- Runtime - execution of compiled JS file.

## Primitive types

```ts
const sum = (a: number, b: number): number => {
  return a + b;
};

sum(1, 2); // Ok
sum(1, "2"); // Error
```

```ts
const a: string = "abc";
const b: null = null;
const c: boolean = true;

const numbers = [1, 2, 3];
const getNumber = (value: number): number | undefined =>
  numbers.find((element) => element === value);

const getProperty = (key: string, obj: object): unknown | undefined => obj[key];
```

## Types

```ts
type PrimitiveType = string;

type FunctionType = (a: number, b: number) => number;
const sum: FunctionType = (a, b) => a + b;

// Union type - only one of there variants is valid
type TrafficLightColor = "red" | "green" | "yellow";

const logTrafficLightColor = (light: TrafficLightColor) => console.log(light);
logTrafficLight("yellow"); // Ok because it's one of options
logTrafficLight("purple"); // Not ok because it's not in TrafficLightColor

// Object type
type Potion = {
  name: string;
  price: number;
  // () => void means that function returns nothing
  drink: () => void;
};
```

## Object types

```ts
// Question: how to describe type of potion?
const potion = {
  name: "Health potion",
  owner: null,
};

// Bad because we don't know about potion fields
const potion: object = {
  name: "Health potion",
  owner: null,
};

// Good because we know contents of potion
interface Potion {
  name: string;
  owner: null;
}

const potion: Potion = {
  name: "Health potion",
  owner: null,
};

// Also good because we know contents of potion
type Potion = {
  name: string;
  owner: null;
};

const potion: Potion = {
  name: "Health potion",
  owner: null,
};
```

**Important**: interfaces can describe objects and classes, types can describe everything.

## Generics

```ts
function logElements<T>(arr: Array<T>) {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];

    console.log(element);
  }
}

logElements<number>([1, 2, 3]); // ok
logElements<string>(["1", "2", "3"]); // ok
logElements<boolean>([true, false, 123]); // not ok because 123 is not a boolean

// Pass generic in interface
interface User<T> {
  role: T;
  email: string;
}

// Pass generic in type
type User<T> = {
  role: T;
  email: string;
};
```

Type of generic can be restricted:

```ts
function replaceElement<T>(iterable: T): T {
  const index = str.indexOf(symbol);

  return iterable.slice(0, index) + replacement + iterable.slice(index + 1);
}

replaceElement<string>("Lorem ipsum dolorem sit amet");
replaceElement<[]>([1, 2, 3]);
replaceElement<{}>({ foo: bar }); // Not ok because object doesn't have indexOf or slice

// T now can be only array or string
function replaceElement<T extends [] | string>(iterable: T) {
  const index = str.indexOf(symbol);

  return iterable.slice(0, index) + replacement + iterable.slice(index + 1);
}
```

## Array types

```ts
const numbers = [1, 2, 3];

numbers.push(4);

// Both options say that numbers is array of numbers; can contain any number of elements
// Option 1
type Numbers = Array<number>;
// Option 2. Preferable
type Numbers = number[];
```

### Tuple types

Tuple type describes array of fixed length.

```ts
const obj = {
  foo: "bar",
  baz: "quux",
};

const entries = Object.entries(obj); // Will return [['foo', 'bar'], ['baz', 'quux']]
/*
 * Can be described as [string, string][]:
 * [string, string] - tuple type, describes type of entry, i.e. inner array where first string is key, the second is number
 * [] - says that there are unlimited number of entries
 */
```
