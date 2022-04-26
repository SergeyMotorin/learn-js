
// Implementation of the method using ES6 for-of

if (!Array.prototype.removeDuplicates) {
    Object.defineProperty(Array.prototype, 'removeDuplicates', {
        value: function() {
            var result = []
                    
            // Loop through array values
            for (const value of this) {
                if (result.indexOf(value) === -1) {
                    result.push(value)
                }
            }
            
            return result
        }
    })
}

const data = [ 30, 10, 10, 20, 10, 20, 30 ]

const newData = data.removeDuplicates()
console.log(newData)
