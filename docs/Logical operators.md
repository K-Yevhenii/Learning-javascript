# Logical operators

`&&` returns the last truthy value or the first falsey value

```js
4 && 5; // returns 5
null && 5; // returns null
```

`||` returns the first truthy value or the last falsey value

```js
4 && 5; // returns 4
null || ''; // returns ''
```

**Important**: logical AND or OR doesn't convert to boolean.
