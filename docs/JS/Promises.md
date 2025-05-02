| Назва                  | Тип             | Опис                                                                             | Приклад                                                              |
| ---------------------- | --------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `Promise`              | Клас            | Конструктор для створення нового промісу.                                        | `new Promise((resolve, reject) => { ... })`                          |
| `then()`               | Метод           | Реєструє колбек при успішному завершенні (`resolve`).                            | `promise.then(value => console.log(value))`                          |
| `catch()`              | Метод           | Реєструє колбек при помилці (`reject`).                                          | `promise.catch(error => console.error(error))`                       |
| `finally()`            | Метод           | Виконується у будь-якому випадку (успіх або помилка).                            | `promise.finally(() => console.log("Done"))`                         |
| `Promise.resolve()`    | Статичний метод | Повертає вже виконаний проміс із вказаним значенням.                             | `Promise.resolve("OK").then(v => console.log(v))`                    |
| `Promise.reject()`     | Статичний метод | Повертає проміс, що завершився з помилкою.                                       | `Promise.reject("Error").catch(e => console.log(e))`                 |
| `Promise.all()`        | Статичний метод | Чекає виконання всіх промісів або першу помилку.                                 | `Promise.all([p1, p2]).then(v => console.log(v))`                    |
| `Promise.race()`       | Статичний метод | Повертає результат першого завершеного (успіх/помилка) промісу.                  | `Promise.race([p1, p2]).then(v => console.log(v))`                   |
| `Promise.allSettled()` | Статичний метод | Чекає завершення всіх промісів незалежно від результату.                         | `Promise.allSettled([p1, p2]).then(results => console.log(results))` |
| `Promise.any()`        | Статичний метод | Повертає перший успішний результат або помилку, якщо всі завершились з помилкою. | `Promise.any([p1, p2]).then(v => console.log(v))`                    |

| Назва                  | Тип             | Опис                                                             | Приклад використання                             |
| ---------------------- | --------------- | ---------------------------------------------------------------- | ------------------------------------------------ |
| `Promise.then()`       | Метод           | Обробляє успішне або неуспішне завершення.                       | `promise.then(result => console.log(result))`    |
| `Promise.catch()`      | Метод           | Обробляє помилку, якщо проміс завершився з помилкою.             | `promise.catch(error => console.error(error))`   |
| `Promise.finally()`    | Метод           | Викликається після завершення (успіх або помилка).               | `promise.finally(() => console.log("Done"))`     |
| `Promise.resolve()`    | Статичний метод | Створює успішний проміс.                                         | `Promise.resolve("ok").then(console.log)`        |
| `Promise.reject()`     | Статичний метод | Створює проміс, що одразу завершується з помилкою.               | `Promise.reject("error").catch(console.error)`   |
| `Promise.all()`        | Статичний метод | Чекає всі проміси — успішно або перший `reject`.                 | `Promise.all([p1, p2]).then(console.log)`        |
| `Promise.race()`       | Статичний метод | Повертає результат першого завершеного промісу.                  | `Promise.race([p1, p2]).then(console.log)`       |
| `Promise.allSettled()` | Статичний метод | Чекає завершення всіх промісів і повертає масив результатів.     | `Promise.allSettled([p1, p2]).then(console.log)` |
| `Promise.any()`        | Статичний метод | Повертає результат першого успішного промісу або AggregateError. | `Promise.any([p1, p2]).then(console.log)`        |
