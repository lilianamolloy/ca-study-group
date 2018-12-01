function myFilter(arr, fn){
    let array = []
    arr.forEach( x => {
        if(fn(x)) {
            array.push(x)
        }
    })
    return array
}

const result = myFilter([1,2,3,1,4,1,2], (x) => x <= 2)

console.log(result)

// Extends prototype

Array.prototype.myFilter = function myFilter(fn){
    let array = []
    this.forEach( x => {
        if(fn(x)) {
            array.push(x)
        }
    })
    return array
}

const numbers = [1,2,3,1,4,1,2]
console.log(
    numbers.myFilter(x => x<= 2)
)