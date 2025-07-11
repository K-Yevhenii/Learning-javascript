| Категорія | Метод / Властивість   | Опис                                           | Синтаксис                             | Приклад коду                                            |
| --------- | --------------------- | ---------------------------------------------- | ------------------------------------- | ------------------------------------------------------- |
| Отримання | `getElementById`      | Отримує елемент за ID                          | `document.getElementById("id")`       | `const el = document.getElementById("menu");`           |
|           | `querySelector`       | Повертає перший елемент за CSS-селектором      | `document.querySelector(".class")`    | `const btn = document.querySelector(".btn");`           |
|           | `querySelectorAll`    | Повертає всі елементи (NodeList) за селектором | `document.querySelectorAll("li")`     | `const items = document.querySelectorAll("li");`        |
| Додавання | `createElement`       | Створює новий HTML-елемент                     | `document.createElement("div")`       | `const div = document.createElement("div");`            |
|           | `append`              | Додає в кінець елемент                         | `parent.append(child)`                | `document.body.append(div);`                            |
|           | `prepend`             | Додає на початок елемент                       | `parent.prepend(child)`               | `document.body.prepend(div);`                           |
|           | `appendChild`         | Додає дочірній елемент                         | `parent.appendChild(child)`           | `ul.appendChild(li);`                                   |
| Видалення | `remove`              | Видаляє сам елемент                            | `element.remove()`                    | `btn.remove();`                                         |
|           | `removeChild`         | Видаляє дочірній елемент                       | `parent.removeChild(child)`           | `ul.removeChild(li);`                                   |
| Заміна    | `replaceWith`         | Замінює один елемент іншим                     | `element.replaceWith(newEl)`          | `oldEl.replaceWith(newEl);`                             |
| Атрибути  | `setAttribute`        | Встановлює атрибут                             | `el.setAttribute(name, value)`        | `img.setAttribute("src", "logo.png");`                  |
|           | `getAttribute`        | Отримує значення атрибута                      | `el.getAttribute(name)`               | `const href = link.getAttribute("href");`               |
|           | `removeAttribute`     | Видаляє атрибут                                | `el.removeAttribute(name)`            | `input.removeAttribute("disabled");`                    |
| Класи     | `classList.add`       | Додає клас                                     | `el.classList.add("class")`           | `div.classList.add("active");`                          |
|           | `classList.remove`    | Видаляє клас                                   | `el.classList.remove("class")`        | `div.classList.remove("hidden");`                       |
|           | `classList.toggle`    | Перемикає (додає/видаляє) клас                 | `el.classList.toggle("class")`        | `div.classList.toggle("open");`                         |
|           | `classList.contains`  | Перевіряє наявність класу                      | `el.classList.contains("class")`      | `if (btn.classList.contains("active")) {}`              |
| Вміст     | `innerHTML`           | HTML-вміст (парсить HTML)                      | `el.innerHTML = "<p>Hello</p>"`       | `div.innerHTML = "<strong>Привіт</strong>";`            |
|           | `textContent`         | Текст без HTML-тегів                           | `el.textContent = "text"`             | `p.textContent = "Привіт";`                             |
|           | `innerText`           | Текст з урахуванням стилів (менш надійний)     | `el.innerText = "text"`               | `div.innerText = "Вітаю!";`                             |
| Події     | `addEventListener`    | Додає слухача події                            | `el.addEventListener("event", fn)`    | `btn.addEventListener("click", () => alert("Click!"));` |
|           | `removeEventListener` | Видаляє слухача події                          | `el.removeEventListener("event", fn)` | `el.removeEventListener("click", handler);`             |
