# Async JavaScript

## Callbacks

```js
// Function can accept primitives as arguments
function sum(a, b) {
  return a + b;
}

const processUser = (error, result) => {
  if (error) {
  }

  if (result) {
  }
};

function getAPIData() {}

// But also function can accept function-callback as argument
const getUser = getAPIData('/users', processUser);
```

## Timeouts and intervals

```js
// Runs once code in callback after 1s. Returns count of miliseconds till execution of callback
const miliseconds = setTimeout(() => {
  console.log('Hello from callback');
}, 1000);

// ...

if (miliseconds > 500) {
  console.log('Half of time passed');
}

const miliseconds = setInterval(() => {
  console.log('Hello from interval');
}, 1000);
```

## Async code

```js
// If request is unsuccessful callback was called with Error, null
// If request is successful callback was called with null, Response

const loginUser = getAPIData('/login', (error, result) => {
  if (error) {
    console.log(error);
  }

  if (result) {
    getAPIData('/users', (error, user) => {
      if (error) {
        console.log(error);
      }

      if (user) {
        getUserOrder(`/orders?user-id=${user.id}`, (error, result) => {
          if (error) {
            console.log(error);
          }

          if (result) {
            console.log(error);
          }
        });
      }
    });
  }
});
```

## Promises

```js
const promise = new Promise((res, reject));

loginUser()
  .then((token) => getUserProfile(token))
  .then((user) => getUserOrders(user.id))
  .catch((error) => console.log(error));
```

## `async...await`

```js
async function loadUserPage() {
  try {
    const token = await loginUser();
    const user = await getUserProfile(token);
    const orders = await getUserOrders(user.id);
  } catch (error) {
    console.log(error);
  }
}
```

## Control of async flow

### Promisify
