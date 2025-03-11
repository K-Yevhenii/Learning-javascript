### **Властивості елементів**

| Property                         | Descriptions                                                       | syntax                       |
| -------------------------------- | ------------------------------------------------------------------ | ---------------------------- |
| `element.parentNode`             | Батьківський вузол (може бути елементом або `document`)            | `div.parentNode`             |
| `element.parentElement`          | Батьківський елемент (повертає `null`, якщо батько не є елементом) | `div.parentElement`          |
| `element.children`               | Колекція всіх дочірніх елементів (без текстових вузлів)            | `div.children`               |
| `element.firstChild`             | Перший дочірній вузол (може бути текстовим)                        | `div.firstChild`             |
| `element.firstElementChild`      | Перший дочірній елемент                                            | `div.firstElementChild`      |
| `element.lastChild`              | Останній дочірній вузол                                            | `div.lastChild`              |
| `element.lastElementChild`       | Останній дочірній елемент                                          | `div.lastElementChild`       |
| `element.nextSibling`            | Наступний сусідній вузол (може бути текстовим)                     | `div.nextSibling`            |
| `element.nextElementSibling`     | Наступний сусідній елемент                                         | `div.nextElementSibling`     |
| `element.previousSibling`        | Попередній сусідній вузол                                          | `div.previousSibling`        |
| `element.previousElementSibling` | Попередній сусідній елемент                                        | `div.previousElementSibling` |
| `element.nodeName`               | Назва вузла (наприклад, `"DIV"` для `<div>`)                       | `div.nodeName`               |
| `element.nodeType`               | Тип вузла (1 – елемент, 3 – текст, 8 – коментар тощо)              | `div.nodeType`               |
| `element.childNodes`             | Колекція всіх дочірніх вузлів (включаючи текстові вузли)           | `div.childNodes`             |
| `element.hasChildNodes()`        | Перевіряє, чи є у вузла дочірні елементи                           | `div.hasChildNodes()`        |
| `element.closest(selector)`      | Шукає найближчого предка, який відповідає селектору                | `div.closest(".container")`  |
| `element.contains(child)`        | Перевіряє, чи є елемент `child` нащадком `element`                 | `div.contains(span)`         |

### **Методи для пошуку елементів**

| Method                                       | Descriptions                                         | syntax                                    |
| -------------------------------------------- | ---------------------------------------------------- | ----------------------------------------- |
| `document.getElementById(id)`                | Повертає елемент за `id` (унікальний)                | `document.getElementById("myDiv")`        |
| `document.getElementsByClassName(className)` | Повертає HTMLCollection елементів за класом          | `document.getElementsByClassName("box")`  |
| `document.getElementsByTagName(tagName)`     | Повертає HTMLCollection елементів за тегом           | `document.getElementsByTagName("p")`      |
| `document.querySelector(selector)`           | Повертає перший елемент, що відповідає CSS-селектору | `document.querySelector(".menu-item")`    |
| `document.querySelectorAll(selector)`        | Повертає NodeList усіх елементів за CSS-селектором   | `document.querySelectorAll(".menu-item")` |
| `document.getElementsByName(name)`           | Повертає всі елементи з атрибутом `name`             | `document.getElementsByName("username")`  |
| `document.forms`                             | Колекція всіх `<form>` на сторінці                   | `document.forms`                          |
| `document.images`                            | Колекція всіх `<img>`                                | `document.images`                         |
| `document.links`                             | Колекція всіх `<a>` з `href`                         | `document.links`                          |
| `document.scripts`                           | Колекція всіх `<script>`                             | `document.scripts`                        |
| `element.matches(selector)`                  | Перевіряє, чи відповідає елемент селектору           | `div.matches(".active")`                  |
| `element.querySelector(selector)`            | Повертає перший вкладений елемент за селектором      | `div.querySelector("span")`               |
| `element.querySelectorAll(selector)`         | Повертає всі вкладені елементи за селектором         | `div.querySelectorAll("span")`            |

### **Методи пошуку елементів**

| Search method            | Looking for a...       | return            | Searching inside an element? | living collection? | syntax                                         |
| ------------------------ | ---------------------- | ----------------- | ---------------------------- | ------------------ | ---------------------------------------------- |
| `querySelector`          | Будь-який CSS-селектор | Один об'єкт       | Так                          | Ні                 | `document.querySelector(".box")`               |
| `querySelectorAll`       | Будь-який CSS-селектор | Колекцію об'єктів | Так                          | Ні                 | `document.querySelectorAll(".box")`            |
| `getElementById`         | `id`                   | Один об'єкт       | Ні                           | Ні                 | `document.getElementById("header")`            |
| `getElementsByTagName`   | Тег або `*`            | Колекцію об'єктів | Так                          | Так                | `document.getElementsByTagName("li")`          |
| `getElementsByClassName` | Ім'я класу             | Колекцію об'єктів | Так                          | Так                | `document.getElementsByClassName("container")` |
| `getElementsByName`      | `name`                 | Колекцію об'єктів | Ні                           | Так                | `document.getElementsByName("email")`          |
