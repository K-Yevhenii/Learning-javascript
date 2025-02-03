## Reference types

## Objects

```js
const obj = { foo: 'bar' };
obj = { baz: 'quux' }; // Will raise an error because reference is changed
obj.foo = 123; // Won't raise an error because reference is the same; edit of contents of reference is allowed -> { foo: 123 }
```
