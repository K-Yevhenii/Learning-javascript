# DOM manipulation

## Edit of DOM

### Creation of element

```js
// Creates div element
document.createElement('div');
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
const ul = querySelector('ul');
ul.remove();
```

### Insertion of element to DOM

```html
<ul id="list"></ul>
```

```js
// Inserts button before ul
const ul = document.getElementById('list');
const button = document.createElement('button');
ul.before(button);
// Inserts span after ul
const span = document.createElement('span');
ul.after(span);
// Inserts li's with text Item 1, Item 2
function createLi(text) {
    const li = document.createElement('li');
    li.textContent = text;
    return li;
}
const lis = [createLi('item 1'), createLi('item 2')];
ul.prepend(...lis);
// Inserts li with text Item 3 at the end
const li = createLi('item 3');
ul.append(li);
// Inserts li with text Item 0 at the start
const li = createLi('item 0');
ul.prepend(li);
```

## DOM element properties

### Classes

```html
<button>Click me!</button>
```

```js
// Adds class dark
const button = document.querySelector('button');
button.classList.add('dark');
// Removes class dark
button.classList.remove('dark');
// Toggles class disabled
button.classList.toggle('disabled');
```

### Data-attributes

```html
<div data-theme="dark"></div>
```

```js
// data-theme attribute can be accessed in JS in such way:
const div = querySelector('div');
div.dataset.theme;
```

```js
const section = document.getElementById('section');

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

<section
    id="section"
    data-author="John Does"
    data-last-modified="2025-04-23T21:47:07.670Z"
></section>
```

### Styles

```html
<button id="button">Click me!</button>
```

```js
// Makes button with white background, green text, green border 2px and radius of borders 4px
const button = document.getElementById('button');
button.style.backgroundColor = 'white';
button.style.color ='green';
button.style.border = 'solid 2px currentColor';
button style.borderRadius = '4px';

```
