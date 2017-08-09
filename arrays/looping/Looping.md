Iterative Methods

Immutability

When I say Iterative Function, that is the function passed to our iterating method (map, filter, reduce).

`.map`
Called with a function
The arguments to said function are
  1. The element
  2. The index
  3. Array
Returns an array of the values returned from the iterative function


`.filter`
Called with a function
The arguments to said function are
  1. The element
  2. The index
  3. Array
Will remove or keep each element of the array depending on whether or not
the iterative method returns true(truthy) or false(falsey)

`.reduce`
Reduce can do ANYTHING
Called with an iterative function and a starting value
The arguments to said function are
  1. Either the value of the previous return from the iterative function, or the starting value.
  2. The current element
  3. Index
  4. Array
