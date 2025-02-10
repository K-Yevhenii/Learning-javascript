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

// TODO:
// 1. Find average rating of user's reviews
// 2. Find all reviews with rating 5
// 3. Sort reviews by rating
// 4. Retrieve postcode from user profile using 1. dot notation 2. destructuring
