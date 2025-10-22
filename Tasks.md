# Tasks

## Simple object/array manipulation

```js
const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    color: 'blue',
    details: {
        mileage: 15000,
        owner: 'John Doe'
        tags: ['japanese', 'sedan']
    }
}
```

Goals:

1. Update year to 2022
2. Update mileage to 20000
3. Add to tags 'red'
4. Retrieve the second tag using destructuring

```js

```

## Array methods

```js
const cars = [
    { make: 'Toyota', model: 'Camry', year: 2020, mileage: 15000, tags: ['sedan', 'blue'] },
    { make: 'Honda', model: 'Civic', year: 2019, mileage: 22000, tags: ['sedan', 'black'] },
    { make: 'Ford', model: 'Mustang', year: 2021, mileage: 5000, tags: ['coupe', 'red'] },
    { make: 'Chevrolet', model: 'Camaro', year: 2020, mileage: 10000, tags: ['coupe', 'yellow'] },
];
```

Goals:

1. Find the oldest car
2. Get total mileage of all cars
3. Double mileage of sedans
4. Find cart with mileage >= 12000
5. Collect all tags. Important: each tag should be in result once

## Object manipulation

Swap keys and values

```js
const entry = {
    first: 'foo',
    second: 'bar',
    last: 'baz',
};
```

Find total cost of order

```js
const order = {
    items: {
        milk: {
            id: 1,
            quantity: 2,
            price: 10,
        },
        cola: {
            id: 2,
            quantity: 1,
            price: 5,
        },
        beer: {
            id: 3,
            quantity: 10,
            price: 15,
        },
    },
    discount: 0.2,
};
```
