const obj = {
    buy: function(){ return "I want to buy!!"},
    sell: function(){ return "I want to get out!!"}
}

function originalFunction(num, functionObject){
    if (num % 2 == 0) {
        return functionObject.buy()
    } else {
        return functionObject.sell()
    }
}

console.log(originalFunction(4, obj))
console.log(originalFunction(3, obj))