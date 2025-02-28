# Classes

```ts
interface ICoffeeMachine {
  capacity: number;
  boil: () => void;
  addWater: (amount: number) => void;
}

class CoffeeMachine implements ICoffeeMachine {}

const coffeeMachine = new Co();
```
