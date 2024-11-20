Reset of box-sizing must be applied not only to universal selector but to pseudo-elements too

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```
