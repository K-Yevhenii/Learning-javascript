# CSS

## Селектори елементів (тегів)

Ці селектори застосовують стилі до всіх елементів певного типу

```css
h1 {
  /* До всіх h1 буде синій колір */
  color: blue;
}
```

## Селектори класів

Використовується для вибору елементів, яким призначено певний клас

```css
.button {
  /* Застосовує зелений фон до всіх елементів з класом button. */
  background-color: green;
}
```

## Селектор ідентифікаторів

Ці селектори застосовуються до елементів з певним ідентифікатором. В CSS для них використовується певний символ #

```css
#header {
  background-color: lightgray;
}
```

## Селектори нащадків

Вибирають елементи, які є нащадками інших елементів. Між селекторами ставлять пробіл

```css
.container p {
  color: red;
}
```

```html
<div class="container">
  <p>This is a paragraph inside the container. It will be red.</p>
  <div>
    <p>This paragraph is also inside the container, so it will be red too.</p>
  </div>
</div>

<p>This paragraph is outside the container. It will not be red.</p>
```

## Селектори дочірніх елементів

Вибирають лише прямі дочірні елементи

```css
.container {
  font-size: 18px;
}
```

```html
<div class="container">
  <p>Цей текст буде з розміром шрифту 18px.</p>

  <div>
    <p>
      Цей текст не змінить розмір шрифту, оскільки він не є безпосереднім
      нащадком `.container`.
    </p>
  </div>
</div>
```

## Селектори атрибутів

Вибирають елементи з певними атрибутами.

```css
a[href] {
  color: blue;
}
```

Селектор [атрибут] вибирає елементи, у яких є певний атрибут, у цьому випадку — всі посилання з атрибутом href.

```html
<a href="https://example.com">Example Link</a>
<!-- Цей елемент не буде стилізований, бо немає href -->
<a>Text without link</a>
```
