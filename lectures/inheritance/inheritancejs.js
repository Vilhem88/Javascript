class Vehicle {
  constructor(_engine, _seats, _power) {
    this.engine = _engine;
    this.seats = _seats;
    this.power = _power;
  }
}
class Truck extends Vehicle {
  constructor(_engine, _seats, _power, _weigth, _capacity, _load) {
    super(_engine, _seats, _power);
    this.weigth = _weigth;
    this.capacity = _capacity;
    this.load = _load;
  }
}

let cars = [
    {
        name: 'Mazda',
        doors: 3
    },
    {
        name: 'Honda',
        doors: 5
    },
    {
        name: 'Toyota',
        doors: 7
    },
    {
        name: 'Subaru',
        doors: 2
    },
    {
        name: 'Renault',
        doors: 4
    }
]
// MAP FUNCTION RETURN NEW ARRAY//

let carsDoors = cars.map(function (car) {

    return car.doors 
})

console.log('This are carsDoors array', carsDoors)


// FIND and FILTER //
// FIND RETURN ONLY ONE VALUE

let carName = cars.find(function (car) {
    return car.name == 'Mazda'
})

console.log (carName)

// FILTER RETURN A NEW ARRAY //////////////////////////////////
let moreDoors = cars.filter(function (element){
    return element.doors > 2
})

console.log(moreDoors)

//  REDUCE METHOD RETURNS A RESULT  //

let nums = [10,20,30,40,50]

let resultOfNums = nums.reduce(function (previousNumber, currentNumber){
    return previousNumber + currentNumber
},100)
// 100 SO KOJA VREDNOST DA ZAPOCNE previousNumber, TOA NIE SAMI SI GO ODREDUVAME
console.log(resultOfNums)