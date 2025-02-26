# Call/Bind/Apply

## Partial function

```js
const multiple = (a, b) => a * b;
const double = multiple.bind(null, 2); // partial function from multiple

double(3); // 6
```
