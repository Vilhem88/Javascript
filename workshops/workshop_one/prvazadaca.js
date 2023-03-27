let firstNum = prompt('Please enter a first number')
let secondNum = prompt('Please enter a second number')

let first = parseInt(firstNum)
let second = Number(secondNum)



function compareNumbers(first, second){

    if(isNaN(first) || isNaN(second)){

        // console.log('Enter valid numbers')
        return 'Enter valid numbers'
    }
    
    if(first === second){
        // console.log('numbers are equal')
        return 'numbers are equal'
    }
    
    return first > second 
    ? `first number ${first} is greater than second ${second}` 
    : `second number ${second} is greater than first ${first}`
    
}


let msg =  compareNumbers(first, second)
let paragraph = document.createElement('p')
paragraph.innerText = msg
let div = document.getElementById('result').appendChild(paragraph)

// console.log('Second number: ' + second)