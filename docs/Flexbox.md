# Центрування:

## justify-content: center; – вирівнює елементи по горизонталі (вздовж осі X)

## align-items: center; – вирівнює елементи по вертикалі (вздовж осі Y).

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Щоб контейнер займав всю висоту вікна */
}

.item {
  width: 100px;
  height: 100px;
  background-color: teal;
}
```
