
// Implementation of the method using ES6 for-of

if (!Array.prototype.removeDuplicates) {
  Object.defineProperty(Array.prototype, "removeDuplicates", {
    value: function () {
      var result = []
      
      // Loop through array values
      for (const value of this) {
        if (result.indexOf(value) === -1) {
          result.push(value)
        }
      }

      return result
    }
  });
}

const fruits = [ "🍊", "🍐", "🍐", "🍌", "🍌", "🍌", "🍏", "🍊" ]

const newFruits = fruits.removeDuplicates()

console.log(newFruits)
// Output: [ "🍊", "🍐", "🍌", "🍏" ]
