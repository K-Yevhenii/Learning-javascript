# React

## State

```jsx
import { useState } from 'react';

const App = ({ counter: inputValue }) => {
    let [counter, setCounter] = useState(inputValue);
    return (
        <div>
            <div>{counter}</div>
            <button
                onClick={() => {
                    setCounter((prev) => prev + 1);
                }}
            >
                +
            </button>
            <div>
                <button
                    onClick={() => {
                        setCounter((prev) => prev - 1);
                    }}
                >
                    -
                </button>
            </div>
            <button onClick={() => setCounter(0)}>reset</button>
        </div>
    );
};

export default App;
```

### Class components

#### Initialization

```tsx
// Named export - should be surrounded by curly braces
import { Component } from 'react';

class Counter extends Component {
    state = {
        count: 1,
    };
}

export default Counter;
```

#### Initialization based on props

```tsx
import { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        // Initialization of parent class - `Component`
        super(props);

        // State in class components can be only object; invalid: this.state = props.count
        this.state = { count: props.count };
    }
}

// this.setState uses Object.assign under the hood
const obj = { a: 1 };
const copy = Object.assign({}, obj); // {a: 1 } but with different link
```

#### Update of state

```tsx
class Counter extends Component {
    state = {
        count: 1,
    };

    render() {
        // State cannot be directly updated; a new value for all state - this.setState`
        return <button onClick={() => this.setState({ count: 0 })}>Click me</button>;
    }
}
```

#### Update of state based on previous value

```tsx
class Counter extends Component {
    state = {
        count: 1,
    };

    render() {
        return (
            // Update of state based on previous value should be done via callback that accepts
            // previous state
            <button onClick={() => this.setState((prev) => ({ count: prev.count + 1 }))}>+1</button>
        );
    }
}
```

#### Callback after update of state

```tsx
class Counter extends Component {
    state = {
        count: 1,
    };

    render() {
        return (
            <button
                onClick={() => {
                    this.setState(
                        (prev) => ({ count: prev.count + 1 }),
                        // Callback that runs after update of state
                        () => console.log(this.count),
                    );
                }}
            >
                +1
            </button>
        );
    }
}
```

### Functional components

#### Initialization

```tsx

```

#### Initialization based on props

```tsx

```

#### Update of state

```tsx

```

#### Update of state based on previous value

```tsx

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
