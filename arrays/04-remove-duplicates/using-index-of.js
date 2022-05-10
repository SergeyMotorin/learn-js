
// Implementation of the method using Array.filter() and Array.indexOf() 

if (!Array.prototype.removeDuplicates) {
  Object.defineProperty(Array.prototype, "removeDuplicates", {
    value: function () {
      return this.filter(
        (item, index) => this.indexOf(item) === index
      )
    },
  });
}

const fruits = [ "🍊", "🍐", "🍐", "🍌", "🍌", "🍌", "🍏", "🍊" ]
  
const newFruits = fruits.removeDuplicates()

console.log(newFruits)
// Output: [ "🍊", "🍐", "🍌", "🍏" ]