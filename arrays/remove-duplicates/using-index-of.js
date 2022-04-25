
// Implementation of the function using Array.filter()

Array.prototype.removeDuplicates = function() {
    return this.filter(
        (item, index) => this.indexOf(item) === index
    )
}

const data = [ 30, 10, 10, 20, 10, 20, 30 ]

const newData = data.removeDuplicates()
console.log(newData)
