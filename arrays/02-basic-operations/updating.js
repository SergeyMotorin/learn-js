
// Update elements using their indexes

var fruits = ["🍊", "🍏", "🍊"]
fruits[1] = "🍊"

console.log(fruits)
// [ "🍊", "🍊", "🍊" ]


// Update elements using an empty statement

const ascendingNumbers = [1, 2, 3]

// Squared all values
for (let i = 0; i < ascendingNumbers.length; ascendingNumbers[i++] = ascendingNumbers[i - 1] ** 2)

console.log(ascendingNumbers);
// expected output: [ 1, 4, 9 ]
