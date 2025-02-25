# Inheritance

## Base scenario

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }
}

const bagira = new Cat('Bagira');
bagira.speak(); // Bagira makes a noise.
```

## Override

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    console.log(`${this.name} meows`);
  }
}

const bagira = new Cat('Bagira');
bagira.speak(); // Bagira meows
```
