// *Problem 13*
//   Write a function, makeAllCaps(), that takes in an array of words and capitalizes them. If the 
//   array contains anything but strings, it should throw an error.

function makeAllCaps(arr){
    const thePromise = new Promise(function(res, rej){
        const newArray = arr.map(str => {
            if (typeof str === 'string'){
                return capitalize(str)
            } else {
                rej('One or more items is not a string')
            }
        })
        res(newArray)
    })
    return thePromise
}

function capitalize(str){
    return `${str[0].toUpperCase()}${str.substr(1, (str.length - 1))}`
}


console.log(makeAllCaps(['apple', 'banana', 'cake']))