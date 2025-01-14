# Unique items

1. Find count of visits for each person.
2. Print a list of people who has more than 1 visit.
3. Find a person who has the most visits.

**Important**: use destructuring

```js
const visits = [
  {
    id: 1,
    name: "Sam",
    date: "2025-01-02",
  },
  {
    id: 2,
    name: "John",
    date: "2024-11-30",
  },
  {
    id: 3,
    name: "Lea",
    date: "2025-01-01",
  },
  {
    id: 4,
    name: "Sam",
    date: "2025-01-04",
  },
  {
    id: 5,
    name: "Lea",
    date: "2025-01-07",
  },
  {
    id: 6,
    name: "Mark",
    date: "2024-12-25",
  },
  {
    id: 7,
    name: "Sam",
    date: "2024-01-13",
  },
];

const usersVisits = {};
const userNameVisit = [];
for (const element of visits) {
  const { name } = element;
  if (usersVisits[name]) {
    usersVisits[name] += 1;
  } else {
    usersVisits[name] = 1;
  }
}
console.log(usersVisits);

const visitsEntries = Object.entries(usersVisits);
let result = [];
let entryWithBiggestVisitsCount = null;
for (let i = 0; i < visitsEntries.length; i++) {
  const [name, visitsCount] = visitsEntries[i];
  if (visitsCount > 1) {
    result = [...result, name];
  }
  if (
    !entryWithBiggestVisitsCount ||
    entryWithBiggestVisitsCount[1] < visitsCount
  ) {
    entryWithBiggestVisitsCount = visitsEntries[i];
  }
}
const [usurerWithBiggestVisitsCount] = entryWithBiggestVisitsCount;
console.log(usurerWithBiggestVisitsCount);

console.log(result);
```
