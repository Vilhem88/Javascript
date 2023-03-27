import * as module1 from "./module1.js";
import Car from "./Car.js";

// za da gi importirame site elementi t.e vgnezduvanje na cel file vo drug file moze samo so -> import './filename.js'

console.log("Ova se cars od module1 vo module 2", module1.cars);

let price = module1.cars[0].price;
let brand = module1.cars[0].brand;
let model = module1.cars[0].model;

let finalPrice = module1.calculateBasicPrice(price);
console.log(
  "This final price for",
  brand + " " + model + " is: " + finalPrice + " euro"
);


let car1 = new Car('Honda', 'Jazz', '2023', 1600, 23000)
console.log(car1)