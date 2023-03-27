let mixArray = [1,-73,10, 23, -1, 200, 123, -60, -87, 111]

let negativeArray = mixArray.filter(function(eachNum){
    return eachNum < 0
})

let positiveArray = mixArray.filter(function(eachNum){
    return eachNum > 0     
})

negativeNum = negativeArray.map((num) => {
    return Math.abs(num)
})


let sumNegativeNums = negativeNum.reduce((acumulator, num) =>{

    return acumulator + num
})

let positiveNums = positiveArray.reduce((accumulator, num) =>{
    return accumulator + num
})

console.log('Suma na pozitivni:', positiveNums)
console.log('Suma na negativni:', sumNegativeNums)