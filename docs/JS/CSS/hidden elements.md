# display: none

Значення display: none дозволяє повністю приховати елемент, звільнивши його простір для інших. Такий елемент вилучається з потоку документа, візуально ховається і не бере участі у розмітці сторінки.

display не можна анімувати, але для цього існують інші підходи, з якими познайомимося пізніше.

<div class="tabs">
  <div class="controls">...</div>

  <div class="pane is-active">1 - Lorem ipsum dolor sit amet consectetur.</div>
  <div class="pane">2 - Lorem ipsum dolor sit amet consectetur.</div>
  <div class="pane">3 - Lorem ipsum dolor sit amet consectetur.</div>
</div>

### display: none, display: block, is-active.

Спочатку сховаємо всі панелі за допомогою display: none, вони будуть візуально приховані і звільнять своє місце в потоці документа. Далі додамо клас активної панелі is-active, в якому будемо встановлювати display: block. Панель з класом is-active буде видно, інші приховані.

```css
.pane {
  display: none;
  padding: 8px;
  border: 1px solid blue;
  border-radius: 3px;
}

.is-active {
  display: block;
}
```
