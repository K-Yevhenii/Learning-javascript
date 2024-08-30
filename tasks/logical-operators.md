## Logical operators

**Goal** - find correct value of `result` and explain why.

```js
const foo = 4;
const bar = null;
const baz = '0';
const quux = [];

const result = foo && bar || !baz || quux;
```

**Goal** - find correct value of `result` and explain why.

```js
const foo = '$120';
const bar = {};
const baz = 42;
const quux = undefined;

const result = (baz || bar && foo.slice(4)) && !quux;
```

**Question** - are these expressions equivalent?

```js
const first = !foo && !bar;
const second = !(foo || bar);
```
