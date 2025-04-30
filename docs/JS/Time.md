# Time in JavaScript

## Basic syntax

```js
// Executes callback once after n ms
setTimeout(() => {
    console.log('Hello World');
}, 1000);
```

```js
// Executes callback every n ms
setInterval(() => {
    console.log('Hello');
}, 1000);
```

```js
// Cancel timeout
const timerId = setTimeout(() => {
    console.log('Hello World');
}, 1000);
clearTimeout(timerId);
```

## Recursive `setTimeout`

```js
let timerId = setTimeout(function log() {
    console.log('Hello World');
    timerId = setTimeout(log, 1000);
}, 1000);
```

## `this` in timeouts

```js
class Timer {
    constructor() {
        this.count = 0;
    }

    increment() {
        this.count += 1;
    }

    launch() {
        setInterval(this.increment.bind(this), 1000);
        // setInterval(() => this.increment(), 1000);
    }
}
```
