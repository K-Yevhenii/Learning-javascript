# Classes and prototypes

## Theory

`Autoboxing` - конвертація примітиву в вбудованний обʼєкт при виклику методу чи причтанні властивості

```js
const str = 'abc';
str.toUpperCase(); // Під капотом створюємо new String('abc'), у якого є метод uppercase
```

- Все у JavaScript обʼєкт, тому що кожний клас [наслідується від Object](https://learn.javascript.ru/native-prototypes#drugie-vstroennye-prototipy).
- Класи - синтаксичний цукор для прототипів, тобто більш зручний формат роботи з прототипами.
- Класи та інстанси класу - не абстракція та конкретна реалізація, а два звичайних обʼєкти, повʼязані між собою.

### Check parent class of object

```js
class Cart {}

class CartWithDiscount extends Cart {}

const discountedCart = new CartWithDiscount();

// Всі true, тому що прототипний ланцюжок складається CartWithDiscount -> Cart -> Object
console.log(discountedCart instanceof CartWithDiscount); // true
console.log(discountedCart instanceof Cart); // true
console.log(discountedCart instanceof Object); // true

// Обережно, тому що constructor можна змінити - напр., discountedCart.constructor = null і перевірка нижче не буде працювати
console.log(discountedCart.constructor === CartWithDiscount); // true
console.log(discountedCart.constructor === Cart); // false
```

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

function CoolCar({ brand, model, price }) {
  Car.call(this, { brand, model, price }); // the same as `CoolCar extends Car`
}

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
