| Метод                   | Опис                                                                | Синтаксис                         | Приклад                                                            |
| ----------------------- | ------------------------------------------------------------------- | --------------------------------- | ------------------------------------------------------------------ |
| `setTimeout`            | Виконує функцію один раз після затримки                             | `setTimeout(callback, delay)`     | `setTimeout(() => { console.log("1 сек"); }, 1000);`               |
| `clearTimeout`          | Скасовує `setTimeout`                                               | `clearTimeout(timeoutId)`         | `const id = setTimeout(...); clearTimeout(id);`                    |
| `setInterval`           | Виконує функцію повторно через кожен інтервал                       | `setInterval(callback, delay)`    | `setInterval(() => { console.log("Тік"); }, 1000);`                |
| `clearInterval`         | Зупиняє `setInterval`                                               | `clearInterval(intervalId)`       | `const id = setInterval(...); clearInterval(id);`                  |
| `requestAnimationFrame` | Викликає функцію перед наступним кадром перерисовки (60 кадрів/сек) | `requestAnimationFrame(callback)` | `requestAnimationFrame(() => { console.log("Анімація"); });`       |
| `cancelAnimationFrame`  | Скасовує запланований `requestAnimationFrame`                       | `cancelAnimationFrame(requestId)` | `const id = requestAnimationFrame(...); cancelAnimationFrame(id);` |
| `performance.now`       | Повертає високоточний час (у мс з моменту старту сторінки)          | `performance.now()`               | `console.log(performance.now());`                                  |

- `setTimeout(callback, delay)`

    - ❗ Не дуже точний при великому навантаженні або в неактивній вкладці.
    - ✅ Виконує функцію один раз через `delay` мс.
    - 📌 **Приклад:**
        ```js
        setTimeout(() => {
            console.log('Через 1 секунду');
        }, 1000);
        ```

- `setInterval(callback, delay)`

    - ❗ Також може втрачати точність.
    - ✅ Викликає функцію кожні `delay` мс.
    - 📌 **Приклад:**
        ```js
        const id = setInterval(() => {
            console.log('Кожну секунду');
        }, 1000);
        ```

- `requestAnimationFrame(callback)`

    - ✅ Ідеальний для плавної анімації, синхронізується з оновленням екрана (~60 кадрів/сек).
    - 📌 **Приклад:**
        ```js
        function draw() {
            console.log('Кадр');
            requestAnimationFrame(draw);
        }
        requestAnimationFrame(draw);
        ```

- `cancelAnimationFrame(requestId)`

    - ❌ Зупиняє `requestAnimationFrame`.
    - 📌 **Приклад:**
        ```js
        const id = requestAnimationFrame(draw);
        cancelAnimationFrame(id);
        ```

- `performance.now()`
    - ✅ Дає високоточний час (в мс) з моменту завантаження сторінки.
    - 🕒 Точність — до **0.001 мс** (мікросекундний рівень).
    - 📌 **Приклад:**
        ````js
        const start = performance.now();
        // деякий код
        const end = performance.now();
        console.log(`Час виконання: ${end - start} мс`);
        ```очні вимірювання часу (з точністю до мікросекунд), підходить для профілювання.
        ````
