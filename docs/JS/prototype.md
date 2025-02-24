# Classes and prototypes

## Old syntax (>ES2015 or ES6)

```js
function Car({ brand, model, price } = {} /* Params of constructor */) {
  // Initialization of class in constructor
  this.brand = brand;
  this.model = model;
  this.price = price;
}

// Instance method
Car.prototype.sayHi = function () {
  console.log('Car.prototype.sayHi -> this', this);
  console.log(this.price);
  console.log('Hello :)');
};

// Static property
Car.wheels = 4;
```

## New syntax

```js
class Car {
  static wheels = 4;

  constructor({ brand, model, price } = {}) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

  sayHi() {
    console.log('Car.prototype.sayHi -> this', this);
    console.log('Hello :)');
  }
}
```

```js
const myCar = new Car({
  brand: 'Audi',
  model: 'Q3',
  price: 35000,
});

const otherCar = new Car({
  brand: 'Audi',
  model: 'Q3',
  price: 35000,
});

console.log(myCar === otherCar); // false
```
