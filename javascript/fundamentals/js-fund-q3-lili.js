// Problem 3*
// Implement your own version of .forEach
// Define a function that takes a callback and provides the same functionality as the .forEach function inbuilt into es6. You can do this as a function that extends the array prototype (which takes a callback function as an argument), or more simply as a function that takes an array as an argument, as well as a callback function.

function myForEach(arr, fn){
    for(let i of arr) {fn(arr[i-1])}
}

myForEach([1,2,3,4], (x) => console.log(x))

// Extending prototype
Array.prototype.myForEach = function(fn) {
    for (let i of this) {
        fn(this[i-1])
    }
}

const array = [1,2,3,4]
array.myForEach(x => console.log(x))