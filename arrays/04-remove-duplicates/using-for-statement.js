
// Implementation of the method using the for statement

Array.prototype.removeDuplicates = function() {
    var result = []
            
    // Loop through array values
    for(let i = 0; i < this.length; i++){
        if(result.indexOf(this[i]) === -1) {
            result.push(this[i])
        }
    }
    
    return result
}

const data = [ 30, 10, 10, 20, 10, 20, 30 ]

const newData = data.removeDuplicates()
console.log(newData)
