
// Implementation of the method using the for loop

if (!Array.prototype.removeDuplicates) {
  Object.defineProperty(Array.prototype, "removeDuplicates", {
    value: function () {
      var result = []

      // Loop through array values
      for (let i = 0; i < this.length; i++) {
        if (result.indexOf(this[i]) === -1) {
          result.push(this[i])
        }
      }

      return result
    },
  })
}

const fruits = [ "🍊", "🍐", "🍐", "🍌", "🍌", "🍌", "🍏", "🍊" ]

const newFruits = fruits.removeDuplicates()

console.log(newFruits)
// Output: [ "🍊", "🍐", "🍌", "🍏" ]
