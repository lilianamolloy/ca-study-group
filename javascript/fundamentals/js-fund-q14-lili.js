// *Problem 14*
// Write a function that takes an array of numbers, and returns a promise. If the array contains any strings the function should throw an error, otherwise it should resolve with the largest number in the array.

function findLargeNum(arr){
    const thePromise = new Promise(function(res, rej){
        let largestNum = 0
        arr.forEach(num => {
            if (typeof num === 'number'){
                if(num > largestNum) {
                    largestNum = num
                }
            } else {
                rej('There is one or more items that is not a number')
            }
        })
        res(largestNum)
    })
    return thePromise
}

console.log(findLargeNum([1,5,23,8,1]))