const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  isAdmin: true,
  reviews: [
    { place: 'Coffee Shop', rating: 5, id: 3 },
    { place: 'Restaurant', rating: 4, id: 1 },
    { place: 'Museum', rating: 5, id: 2 },
    { place: 'Park', rating: 3, id: 4 },
  ],
  address: {
    city: 'New York',
    street: 'Broadway',
    postCode: '10025',
  },
};
const { reviews } = user
const averageRating = reviews.reduce((acc, { rating }) => acc + rating, 0) / reviews.length;
const reviewsWithHighestRating = reviews.filter(({ rating }) => rating === 5);
reviews.sort((a, b) => a.rating - b.rating);
const postCode = user.address.postCode;
const { address: { postCode: postCode1 } } = user;
// TODO:
// 1. Find average rating of user's reviews
// 2. Find all reviews with rating 5
// 3. Sort reviews by rating
// 4. Retrieve postcode from user profile using 1. dot notation 2. destructuring

// TODO: replace keys and values
const obj = {
  firstValue: 'firstKey',
  secondValue: 'secondKey',
  thirdValue: 'thirdKey',
};
Object.entries(obj).reduce((acc, [key, value]) => ({ ...acc, [value]: key }), {})


// TODO: find all numbers that are repeated in the array
const numbers = [1, 22, 4, 1, 5, 33, 22, 4, 7];
const countNumbers = numbers.reduce((acc, number) => {
  if (acc[number]) {
    acc[number] += 1;
  } else {
    acc[number] = 1;
  }
  return acc;
}, {});
const numberEntries = Object.entries(countNumbers).reduce((acc, [number, count]) =>
  count > 1 ? [...acc, Number(number)] : acc
  , []);
console.log(numberEntries);

