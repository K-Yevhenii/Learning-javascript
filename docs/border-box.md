# Метод 1

```css
html {
  box-sizing: border-box;
}
*,
*:after,
*:before {
  box-sizing: inherit; /* наслідується у батьків (в даному випадку htm, батько у всього) */
}
```

# Метод 2

```css
* {
  box-sizing: border-box;
}
```
