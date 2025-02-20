# `this`

`this` - reference to object in method

```js
// Bad because data and handlers of this data are not connected
const bookShelf = {
  books: ['The Last Kingdom'],
};

function getBooks() {
  return bookShelf.books;
}

function addBook(bookName) {
  bookShelf.books.push(bookName);
}

function removeBook(bookName) {
  const bookIndex = bookShelf.books.indexOf(bookName);
  bookShelf.books.splice(bookIndex, 1);
}

// Good because data and handlers of this data are connected
const bookShelfWithMethods = {
  books: ['The Last Kingdom'],
  getBooks() {
    return this.books;
  },
  addBook(bookName) {
    this.books.push(bookName);
  },
  removeBook(bookName) {
    const bookIndex = this.books.indexOf(bookName);
    this.books.splice(bookIndex, 1);
  },
};
```

```js
// Best because can generate a lot of book shelves with similar behavior but different data
class BookShelf {
  constructor(books, name) {
    this.books = books;
    this.name = name;
  }

  getBooks() {
    return this.books;
  }

  addBook(bookName) {
    this.books.push(bookName);
  }

  removeBook(bookName) {
    const bookIndex = this.books.indexOf(bookName);
    this.books.splice(bookIndex, 1);
  }

  printMe() {
    console.log(this);
  }
}

// {books: ['Artificial Intelligence', '200-years man'], name: 'Sci-Fi'}
const booksWithSciFi = new BookShelf(['Artificial Intelligence', '200-years man'], 'Sci-Fi');
// {books: ['Sherlock Holmes'], name: 'Detective'}
const booksWithDetective = new BookShelf(['Sherlock Holmes'], 'Detective');

booksWithSciFi.addBook('I, Robot');

console.log(booksWithSciFi.getBooks()); // ['Artificial Intelligence', '200-years man', 'I, Robot']
console.log(booksWithDetective.getBooks()); // ['Sherlock Holmes']
```

## Chaining

Chaining - можливість викликати методи ланцюжком

Для chaining потрібно:

1. Виконати роботу, яка буде оновлювати дані в обʼєкті
2. Повернути `this`.

```js
const ladder = {
  step: 0,
  up() {
    this.step++;

    return this;
  },
  down() {
    this.step--;

    return this;
  },
  showStep() {
    alert(this.step);
  },
};

ladder.up().up().down().showStep().down().showStep();
```
