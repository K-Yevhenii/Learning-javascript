# DOM manipulation

## Edit of DOM

### Creation of element

```js
// Creates div element
```

### Removal of element

```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
```

```js
// Removes list and its contents
```

### Insertion of element to DOM

```html
<ul id="list"></ul>
```

```js
// Inserts button before ul

// Inserts span after ul

// Inserts lis with text Item 1, Item 2
// Inserts li with text Item 3 at the end
// Inserts li with text Item 0 at the start
```

## DOM element properties

### Classes

```html
<button>Click me!</button>
```

```js
// Adds class dart

// Removes class dark

// Toggles class disabled
```

### Data-attributes

```html
<div data-theme="dark"></div>
```

```js
// data-theme attribute can be accessed in JS in such way:
```

```js
const section = document.getElementById('#section');

console.log(section.dataset);
/*
 * Prints
 * {
 *   author: 'John Does'
 *   lastModified: '2025-04-23T21:47:07.670Z'
 * }
 */
```

```html
<!-- Section with id in html is represented in this way -->
```

### Styles

```html
<button id="button">Click me!</button>
```

```js
// Makes button with white background, green text, green border 2px and radius of borders 4px
```
