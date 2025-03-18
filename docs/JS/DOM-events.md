### **1. Події миші (Mouse Events)**

| Подія       | Опис                                  | Виклик            | Синтаксис                                               |
| ----------- | ------------------------------------- | ----------------- | ------------------------------------------------------- |
| `click`     | Натискання лівої кнопки миші          | Будь-який елемент | `element.addEventListener("click", () => { ... });`     |
| `dblclick`  | Подвійне натискання лівої кнопки миші | Будь-який елемент | `element.addEventListener("dblclick", () => { ... });`  |
| `mousedown` | Натискання кнопки миші                | Будь-який елемент | `element.addEventListener("mousedown", () => { ... });` |
| `mouseup`   | Відпускання кнопки миші               | Будь-який елемент | `element.addEventListener("mouseup", () => { ... });`   |
| `mousemove` | Рух миші                              | Будь-який елемент | `element.addEventListener("mousemove", () => { ... });` |
| `mouseover` | Наведення миші на елемент             | Будь-який елемент | `element.addEventListener("mouseover", () => { ... });` |
| `mouseout`  | Вихід миші з елемента                 | Будь-який елемент | `element.addEventListener("mouseout", () => { ... });`  |

---

### **2. Події клавіатури (Keyboard Events)**

| Подія     | Опис                | Виклик                          | Синтаксис                                                   |
| --------- | ------------------- | ------------------------------- | ----------------------------------------------------------- |
| `keydown` | Натискання клавіші  | `document`, `input`, `textarea` | `document.addEventListener("keydown", (event) => { ... });` |
| `keyup`   | Відпускання клавіші | `document`, `input`, `textarea` | `document.addEventListener("keyup", (event) => { ... });`   |

---

### **3. Події форми (Form Events)**

| Подія    | Опис             | Виклик                        | Синтаксис                                                                  |
| -------- | ---------------- | ----------------------------- | -------------------------------------------------------------------------- |
| `focus`  | Отримання фокусу | `input`, `textarea`, `select` | `element.addEventListener("focus", () => { ... });`                        |
| `blur`   | Втрата фокусу    | `input`, `textarea`, `select` | `element.addEventListener("blur", () => { ... });`                         |
| `change` | Зміна значення   | `input`, `textarea`, `select` | `element.addEventListener("change", () => { ... });`                       |
| `input`  | Введення даних   | `input`, `textarea`           | `element.addEventListener("input", () => { ... });`                        |
| `submit` | Відправка форми  | `form`                        | `form.addEventListener("submit", (event) => { event.preventDefault(); });` |

---

### **4. Події документа та вікна (Document & Window Events)**

| Подія              | Опис                         | Виклик          | Синтаксис                                                       |
| ------------------ | ---------------------------- | --------------- | --------------------------------------------------------------- |
| `DOMContentLoaded` | DOM завантажено без картинок | `document`      | `document.addEventListener("DOMContentLoaded", () => { ... });` |
| `load`             | Повне завантаження сторінки  | `window`, `img` | `window.addEventListener("load", () => { ... });`               |
| `resize`           | Зміна розміру вікна          | `window`        | `window.addEventListener("resize", () => { ... });`             |
| `scroll`           | Прокручування сторінки       | `window`, `div` | `window.addEventListener("scroll", () => { ... });`             |

---

### **5. Події перетягування (Drag & Drop Events)**

| Подія       | Опис                           | Виклик              | Синтаксис                                                                       |
| ----------- | ------------------------------ | ------------------- | ------------------------------------------------------------------------------- |
| `dragstart` | Початок перетягування          | `draggable` елемент | `element.addEventListener("dragstart", (event) => { ... });`                    |
| `drag`      | Перетягування (рух)            | `draggable` елемент | `element.addEventListener("drag", (event) => { ... });`                         |
| `dragend`   | Завершення перетягування       | `draggable` елемент | `element.addEventListener("dragend", (event) => { ... });`                      |
| `dragenter` | Наведення на зону скидання     | `dropzone` елемент  | `element.addEventListener("dragenter", (event) => { ... });`                    |
| `dragover`  | Перебування над зоною скидання | `dropzone` елемент  | `element.addEventListener("dragover", (event) => { event.preventDefault(); });` |
| `dragleave` | Вихід із зони скидання         | `dropzone` елемент  | `element.addEventListener("dragleave", (event) => { ... });`                    |
| `drop`      | Скидання в зону                | `dropzone` елемент  | `element.addEventListener("drop", (event) => { event.preventDefault(); });`     |

---

### **6. Інші корисні події**

| Подія          | Опис                                  | Виклик                          | Синтаксис                                                                                       |
| -------------- | ------------------------------------- | ------------------------------- | ----------------------------------------------------------------------------------------------- |
| `copy`         | Копіювання тексту                     | `input`, `textarea`, `document` | `document.addEventListener("copy", () => { ... });`                                             |
| `paste`        | Вставка тексту                        | `input`, `textarea`, `document` | `document.addEventListener("paste", () => { ... });`                                            |
| `cut`          | Вирізання тексту                      | `input`, `textarea`, `document` | `document.addEventListener("cut", () => { ... });`                                              |
| `beforeunload` | Попередження перед закриттям сторінки | `window`                        | `window.addEventListener("beforeunload", (event) => { event.returnValue = "Are you sure?"; });` |
