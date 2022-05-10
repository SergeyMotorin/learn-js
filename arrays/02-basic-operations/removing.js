
// Remove an array element using "delete" operator 

const fruits = ["🍊", "🍏", "🍊"];
delete fruits[1]; 
console.log(fruits);
// Output: [ "🍊", <1 empty item>, "🍊" ]

// Add delete() function to Array.Prototype

if (!Object.hasOwnProperty.call(Array.prototype, "delete")) {
  Object.defineProperty(Array.prototype, "delete", {
    value: function (index) {
      delete this[index]; 
      return this;
    }
  }); 
}

const trees = ["🌲", "🍏", "🌲"];
const newTrees = trees.delete(1);

console.log(newTrees);
// Output: [ "🌲", <1 empty item>, "🌲" ]


// Remove from the end of an array 

// Array elements can be removed from the end of an array by setting the length property to a value less than the current value. 

var ascendingNumbers = [1, 2, 3, 4, 5, 6];
    
// Set length to remove elements
ascendingNumbers.length = 5; 

console.log(ascendingNumbers); 
// Output: [ 1, 2, 3, 4, 5 ]


// Remove elements using splice()

const vehicles = ["🚘", "🛩", "🚊", "🍏", "🛳"];
vehicles.splice(3, 1);

console.log(vehicles); 
// [ "🚘", "🛩", "🚊", "🛳" ]


