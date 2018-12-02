// *Problem 12*
// Write a function testNum that takes a number as an argument and returns a promise that resolves if the argument is greater than 10, and errors if it is less than 10.

function testNum(num) {
    const thePromise = new Promise(function(res, rej){
        if (num > 10) {
            res('All good')
        } else {
            rej('Did not resolve')
        }
    })
    return thePromise
}

console.log(testNum(11))