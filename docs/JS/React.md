# React

## State

```tsx
// Counter with class component
```

```tsx
// Counter with functional component
```

## TypeScript

```tsx
// Types for class component

class Counter extends Component {
  static propTypes = {
    initialCount: PropTypes.number.required,
    className: PropTypes.string,
  }


  constructor(props) {
    super(props) {
      this.state = props.initialCount
    }
  }

}
```

```tsx
// Types for functional component
```

## Effects

```tsx
// Effect only after 1 render - sets count to 10
```

```tsx
// Effect on change of dependency
```
