
// Remove an array item using "delete" operator 

const fruits = ["🍊", "🍏", "🍊"]
delete fruits[1]
console.log(fruits)
// Output: [ "🍊", <1 empty item>, "🍊" ]

// Add delete() function to Array.Prototype

if (!Object.hasOwnProperty.call(Array.prototype, "delete")) {
  Object.defineProperty(Array.prototype, "delete", {
    value: function (index) {
      delete this[index] 
      return this
    }
  }); 
}

const trees = ["🌲", "🍏", "🌲"]
const newTrees = trees.delete(1)

console.log(newTrees)
// Output: [ "🌲", <1 empty item>, "🌲" ]


// Remove from the end of an array 

// Array items can be removed from the end of an array by setting the length property to a value less than the current value

var ascendingNumbers = [1, 2, 3, 4, 5, 6]
    
// Set length to remove items
ascendingNumbers.length = 5

console.log(ascendingNumbers)
// Output: [ 1, 2, 3, 4, 5 ]


// Remove items using Array.prototype.slice()

const vehicles = ["🚘", "🛩", "🚊", "🍏", "🛳"]
vehicles.splice(3, 1)

console.log(vehicles)
// Output: [ "🚘", "🛩", "🚊", "🛳" ]


// Remove items using Array.prototype.filter() 

const differentNumbers = [7, 3, 5, 1, 2, 6, 4, 9, 0, 8]
const filteredNumbers = differentNumbers.filter(value => (value > 5))

console.log(filteredNumbers)
// Output: [ 7, 6, 9, 8 ]
