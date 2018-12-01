function myMap(arr, fn){
    let array = []
    for(let i of arr){
        array.push(fn(arr[i-1]))
    }  
    return array
}

const result = myMap([1,2,3], (x) => x + 1)
console.log(result)

// Extends prototype

Array.prototype.myMap = function(fn){
    let array = []
    for(let i of this){
        array.push(fn(this[i-1]))
    }  
    return array
}

const numbers = [1,2,3]
console.log(
    numbers.myMap(x => x + 1)
)