# Events

```js
const handleClick = () => console.log('click');

// Option 1. Can add multiple event handler
element.addEventListener('click', handleClick);

// Option 2. Overwrites existing handlers
element.onclick = () => {
    console.log('click');
};
```

## `this` in events

```js
// Undefined because arrow function takes value of `this` from external scope
const handleClick = () => console.log(this);

// this is `element` on which event listener is attached
function handleClick() {
    console.log(this);
}

element.addEventListener('click', handleClick);
```

## target vs. currentTarget

```html
<div id="container">
    <ul>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>
            Corrupti, nulla eos, maxime, nam beatae fugit officiis vel veritatis exercitationem
            nostrum totam quibusdam aspernatur ullam dignissimos temporibus harum fugiat facere
            magni.
        </li>
        <li>
            <button id="button">Button</button>
        </li>
    </ul>
</div>
```

```js
const button = document.getElementById('button');
const container = document.getElementById('container');

button.addEventListener('click', () => console.log('Click from button'));
container.addEventListener('click', () => console.log('Click from container'));

// On button click 2 logs will appear:
// Click from button
// Click from container

// On button click 2 logs will appear:
container.addEventListener('click', (event) => {
    console.log(event.target); // button because click happened on it
    console.log(event.currentTarget); // container because this listener belongs to it
});
```

## Options of `addEventListener`

```js
document.addEventListener('click', () => console.log('click'), { once: true });
```
