## Гетери (get)

| Метод               | Повертає      |                                                        |
| ------------------- | ------------- | ------------------------------------------------------ |
| `getDate()`         | Число (1–31)  | День місяця (наприклад, 15 — це 15 число місяця)       |
| `getDay()`          | Число (0–6)   | День тижня: 0 — неділя, 1 — понеділок, ..., 6 — субота |
| `getMonth()`        | Число (0–11)  | Місяць: 0 — січень, 1 — лютий, ..., 11 — грудень       |
| `getFullYear()`     | Число         | Повний рік, наприклад, 2025                            |
| `getHours()`        | Число (0–23)  | Години у 24-годинному форматі                          |
| `getMinutes()`      | Число (0–59)  | Хвилини                                                |
| `getSeconds()`      | Число (0–59)  | Секунди                                                |
| `getMilliseconds()` | Число (0–999) | Мілісекунди                                            |
| `getTime()`         | Число         | Кількість мілісекунд з 01.01.1970 UTC (timestamp)      |

## Сетери (set)

| Метод                | Аргумент      | Повертає         |                                                         |
| -------------------- | ------------- | ---------------- | ------------------------------------------------------- |
| `setDate(value)`     | Число (1–31)  | timestamp (в мс) | Встановлює день місяця                                  |
| `setMonth(value)`    | Число (0–11)  | timestamp (в мс) | Встановлює місяць (0 — січень)                          |
| `setFullYear(value)` | Число         | timestamp (в мс) | Встановлює повний рік                                   |
| `setHours(value)`    | Число (0–23)  | timestamp (в мс) | Встановлює години                                       |
| `setMinutes(value)`  | Число (0–59)  | timestamp (в мс) | Встановлює хвилини                                      |
| `setSeconds(value)`  | Число (0–59)  | timestamp (в мс) | Встановлює секунди                                      |
| `setMilliseconds(v)` | Число (0–999) | timestamp (в мс) | Встановлює мілісекунди                                  |
| `setTime(value)`     | Число (в мс)  | timestamp (в мс) | Встановлює дату за кількістю мс з 1970 року (timestamp) |
