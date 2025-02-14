# Array methods

## Uneven numbers

**Goal 1** - calculate sum of uneven numbers. Write 2 implementations using `.reduce` and combination of `.map` and `.filter`

```js
const numbers = [1, 54, 37, 89, 24, 95, 46];
// Write an implementation using `.map` and `.filter`
```

```js
const numbers = [1, 54, 37, 89, 24, 95, 46];
// Write an implementation using `.reduce`
const sum = numbers.reduce(
  (acc, currentValue) => (currentValue % 2 === 0 ? acc + currentValue : acc),
  0
);
const sum = numbers.reduce((acc, currentValue) => {
  return currentValue % 2 === 0 ? acc + currentValue : acc;
}, 0);
const hasUnEven = numbers.some((value) => value % 2 !== 0);
```

**Goal 2** - check does an array has uneven numbers.

## Element replacement

**Goal** - create a function that will perform replacement of strings in array. It should accept an array of strings, string to replace and replacement.
The function should return an updated array. If no string to replace is found, return `null`.
Write 2 implementations using `.map` and `.slice` (check an example with string replacement)

```js
const array = ["lorem", "ipsum", "dolorem", "sit", "amet"];
function replaceString(array, stringToReplace, replacement) {
  // Write an implementation using `.map`
  if (array.every((element) => element !== stringToReplace)) {
    return null;
  }

  return array.map((element) =>
    element === stringToReplace ? replacement : element
  );
}

replaceString(array, "ipsum", "hello"); // Should return `['lorem', 'hello', 'dolorem', 'sit', 'amet'];`

replaceString(array, "I do not know", "hello"); // Should return `null`
```

```js
const array = ["lorem", "ipsum", "dolorem", "sit", "amet"];
function replaceString(array, stringToReplace, replacement) {
  // Write an implementation using `.slice`
}
```

## Sorting

**Goal** - sort orders by status. If a two order have the same status, sort by creation date.

For ascending sorting statuses should be in this order:

new
confirmed
inProgress
delivered
cancelled.

```js
const orderStatuses = {
  NEW: "new",
  CONFIRMED: "confirmed",
  IN_PROGRESS: "inProgress",
  DELIVERED: "delivered",
  CANCELLED: "cancelled",
};
const orderStatusPriorities = {
  [orderStatuses.NEW]: 0,
  [orderStatuses.CONFIRMED]: 1,
  [orderStatuses.IN_PROGRESS]: 2,
  [orderStatuses.DELIVERED]: 3,
  [orderStatuses.CANCELLED]: 4,
};
orders.sort((a, b) => {
  if (a.status === b.status) {
    return a.createdAt > b.createdAt;
  }
  return orderStatusPriorities[a.status] - orderStatusPriorities[b.status];
});
const orders = [
  {
    id: 1,
    status: orderStatuses.NEW,
    createdAt: "2024-09-01",
  },
  {
    id: 2,
    status: orderStatuses.CANCELLED,
    createdAt: "2024-08-30",
  },
  {
    id: 3,
    status: orderStatuses.IN_PROGRESS,
    createdAt: "2024-08-31",
  },
  {
    id: 4,
    status: orderStatuses.NEW,
    createdAt: "2024-08-28",
  },
  {
    id: 5,
    status: orderStatuses.DELIVERED,
    createdAt: "2024-09-05",
  },
  {
    id: 6,
    status: orderStatuses.CONFIRMED,
    createdAt: "2024-08-31",
  },
  {
    id: 7,
    status: orderStatuses.CONFIRMED,
    createdAt: "2024-08-22",
  },
  {
    id: 8,
    status: orderStatuses.CANCELLED,
    createdAt: "2024-09-03",
  },
  {
    id: 9,
    status: orderStatuses.IN_PROGRESS,
    createdAt: "2024-07-06",
  },
  {
    id: 10,
    status: orderStatuses.DELIVERED,
    createdAt: "2024-08-12",
  },
];

// Write your implementation here
```

## Count aggregation

**Goal** - write a function that calculates how many times each student attended a class. The function should return an object where each key corresponds to the student name, value - amount of times that student attended a class.

```js
const studentAttendance = [
  {
    name: "Sam",
    attendedAt: "2024-09-01",
  },
  {
    name: "Sam",
    attendedAt: "2024-08-30",
  },
  {
    name: "John",
    attendedAt: "2024-08-31",
  },
  {
    name: "Joseph",
    attendedAt: "2024-08-28",
  },
  {
    name: "Sam",
    attendedAt: "2024-09-05",
  },
  {
    name: "Joseph",
    attendedAt: "2024-08-29",
  },
];

function calculateAttendanceCount() {
  return studentAttendance.reduce(
    (acc, { name }) => ({ ...acc, [name]: acc[name] ? acc[name] + 1 : 1 }),
    {}
  );
} // Should return object { Sam: 3, John: 1, Joseph: 2 }
```
