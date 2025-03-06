# Classes

```ts
interface ICoffeeMachine {
  capacity: number;
  boil: () => void;
  addWater: (amount: number) => void;
}

// Should have capacity and methods boil and addWater
class CoffeeMachine implements ICoffeeMachine {}

const coffeeMachine = new CoffeeMachine();
```
