
// Filling with a fixed value 
// Array.prototype.fill() replaces all Array elements with a fixed value:

const fixedValues = new Array(5).fill("🍊")

console.log(fixedValues);
// Output: [ 7, 7, 7 ]


// Filling with ascending numbers 
// Array.prototype.keys() reports keys even if an Array only has holes. It returns an iterable, which you can convert to an Array via the spread operator:

const ascendingNumbers = [...new Array(3).keys()]

console.log(ascendingNumbers);
// Output: [ 0, 1, 2 ]


// Filling with computed values 
// The mapping function in the second parameter of Array.from() is notified of holes. Therefore, you can use Array.from() for more sophisticated filling:

const computedValues = Array.from(new Array(5), (x,i) => i*2)

console.log(computedValues);
// Output: [ 0, 2, 4, 6, 8 ]

// Filling with undefined, using the “spread” syntax
// If you need an Array that is filled with undefined, you can use the fact that iteration (as triggered by the spread operator) converts holes to undefineds:

const fillingWithUndefined = [...new Array(3)]

console.log(fillingWithUndefined);
// Output: [ undefined, undefined, undefined ]

