# Time in JavaScript

## Basic syntax

```js
// Executes callback once after n ms
```

```js
// Executes callback every n ms
```

```js
// Cancel timeout
```

## Recursive `setTimeout`

```js

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
        setInterval(this.increment, 1000);
    }
}
```
