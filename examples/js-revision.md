# JS revision

## Array methods

```js
const numbers = [1, 2, 3, 4, 5];

numbers.sort((a, b) => a - b);

const result = numbers.forEach((element) => element); // `forEach` returns undefined

// Returns new array
const filteredArray = numbers.filter((element) => element % 2 === 1); // Filtered array with odd numbers
const sum = numbers.reduce((acc, element) => (acc += element), 0);
const doubled = numbers.map((element) => element * 2); // Doubled array

const three = numbers.find((element) => element === 3); // 3
const notFound = numbers.find((element) => element === 6); // Returns undefined if not found

const threeIndex = numbers.findIndex((element) => element === 3); // 2.
const notFoundIndex = numbers.findIndex((element) => element === 6); // Returns -1 if not found

// Mutates array
// 2 - start index, 1 - count of deleted elements, 10 - element to add
numbers.splice(2, 1, 10);

// Doesn't mutate array, create a new copy
const arrayWithInsertedNumber = [...numbers.slice(0, 2), 10, ...numbers.slice(2)];
```

## Object references

```js
// Returns array with copied elements
const copied = numbers.slice();

const obj = { a: 1 };

const first = [obj];
const second = [obj];

first[0].a = 2;

console.log(second[0].a); // 2 because link is the same
console.log(obj.a); // 2

const third = first.slice();
third[0].a = 3;
console.log(obj.a); // 3
```

## this

```js
const catalogue = {
    books: [],
    addBook(book) {
        this.books.push(book);
    },
    me: this,
    getMe() {
        return this;
    },
};

console.log(catalogue.me); // undefined;
console.log(catalogue.getMe()); // catalogue;
```

## Object manipulation

```js
const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 22,
    email: 'joe@doe.com',
};

Object.keys(user); // ['firstName', 'lastName', 'age', 'email']
Object.values(user); // ['John', 'Doe', 22, 'joe@doe.com',]
Object.entries(user); // [['firstName', 'John'], ...]
// Type of entries - [string, string | number][]
```

## Classes

```ts
class Book {
    constructor(title: string, year: number, author: string) {
        this.title = title;
        this.year = year;
        this.author = author;
    }

    updateTitle(updatedTitle) {
        this.title = updatedTitle;

        this.printAuthor();
    }

    private printAuthor() {
        console.log(author);
    }
}

const book = new Book('Lord of rings', 1950, 'J. Tolkien');
book.updateTitle('Hobbit');
console.log(book.title); // Hobbit

book.printAuthor(); // Will raise an error
```

```ts
class Cat {
    eat() {
        console.log("I'm still hungry");
    }

    sleep() {
        console.log("Don't touch me");
    }

    meow() {
        console.log('Meow! Feed me!');
    }
}

class Bagira extends Cat {
    meow() {
        super.meow();
        console.log('Meow! Meow! Meow!');
    }
}

const bagira = new Bagira();
bagira.meow();
bagira.sleep();
bagira.eat();
```

## TypeScript

```ts
type ArrayOfStrings = string[]; // Any number of elements
type TupleWithString = [string]; // Array with only one string
```

## DOM

```html
<button class="btn" id="button">Button</button>
```

```css
#button {
}
```

```js
const button = document.querySelector('#button');
const button = document.querySelector('.btn');
const button = document.querySelector('button');

const button = document.getElementById('button'); // HTMLButtonElement | null

const buttons = document.querySelectorAll('button'); // NodeList

buttons.length // Works
buttons.forEach(...) // Will also work
buttons.map(...) // Will raise error

// How to call map?
// Option 1. Spread to array.
const array = [...buttons]

Array.prototype.map.call(buttons, (button) => ...) // Will work
```

```html
<ul>
    <li>item 1</li>
    <!-- Comment -->
    I'm text
    <li>item 2</li>
    <li id="item">item 3</li>
</ul>
```

```js
const item = document.getElementById('item');

const list = item.parentNode; // Or item.parentElement

const items = list.children(); // only li
const allItemsWithWhitespacesAndText = list.childNodes;
```

## Events

## Create and removal of event listeners

```html
<button class="btn" id="button">Button</button>
```

```js
// Step 1. Find element
const button = document.getElementById('button');

function clickHandler(event) {
    alert('Hello!');
    console.log(this); // button
}

button.addEventListener('click', clickHandler);
button.removeEventListener('click', clickHandler);
```

## Bubbling

```html
<div>
    <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>
            item 3
            <button>Click</button>
        </li>
    </ul>
</div>
```
