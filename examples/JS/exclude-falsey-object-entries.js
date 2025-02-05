const data = {
  foo: 'bar',
  baz: null,
  quux: 1234,
  abc: 'ololo',
};


const resultReduce = Object.entries(data).reduce((accumulator, [key, value]) => {
  if (value) {
    accumulator[key] = value;
  }

  return accumulator;
}, {});

// Returns an object with truthy values only - { foo: 'bar', quux: 1234, abc: 'ololo' };
