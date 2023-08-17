"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
// let reader = rd.createInterface(fs.createReadStream('./QN2/qn2-puzzle-input.txt'));
// let surfaceArea: number[] = [];
// reader.on("line", (line: string) => {
//     line = line.trim();
//     let array = line.split('x');
//     let firstNumber = parseInt(array[0]);
//     let secondNumber = parseInt(array[1]);
//     let thirdNumber = parseInt(array[2]);
//     let calc = calculate(firstNumber, secondNumber, thirdNumber);
//     surfaceArea.push(calc);
//     console.log(surfaceArea);
// })
// function calculate(firstNumber:number, secondNumber:number, thirdNumber:number) : number {
//     let lowest : number;
//     let middle : number;
//     let highest : number;
//     highest = Math.max(firstNumber,secondNumber,thirdNumber);
//     lowest = Math.min(firstNumber,secondNumber,thirdNumber);
//     if (highest === firstNumber) {
//         middle = Math.max(secondNumber,thirdNumber);
//     } else if (highest === secondNumber) {
//         middle = Math.max(firstNumber,thirdNumber);
//     } else {
//         middle = Math.max(secondNumber,thirdNumber);
//     }
//     let area = 2*highest*middle + 2*highest*lowest + 2*middle*lowest + middle*lowest;
//     // console.log(highest,middle,lowest + " AREA = " + area);
//     return area
// }
// console.log("Final result: " + surfaceArea);
var data = fs.readFileSync('./QN2/qn2-puzzle-input.txt', 'utf-8');
var lines = data.split('\n');
console.log("Number of lines " + lines.length);
var surfaceArea = 0;
var areas = [];
lines.forEach(function (line) {
    line = line.trim();
    var numArray = line.split('x');
    var firstNumber = parseFloat(numArray[0]);
    var secondNumber = parseFloat(numArray[1]);
    var thirdNumber = parseFloat(numArray[2]);
    var highest = Math.max(firstNumber, secondNumber, thirdNumber);
    var lowest = Math.min(firstNumber, secondNumber, thirdNumber);
    var middle;
    if (highest === firstNumber) {
        middle = Math.max(secondNumber, thirdNumber);
    }
    else if (highest === secondNumber) {
        middle = Math.max(firstNumber, thirdNumber);
    }
    else {
        middle = Math.max(secondNumber, firstNumber);
    }
    var area = (2 * highest * middle) + (2 * highest * lowest) + (2 * middle * lowest) + (lowest * middle);
    // console.log(highest + ' ' + middle + ' ' + lowest + ' ' + area)
    areas.push(area);
    surfaceArea += area;
    // console.log(surfaceArea)
});
console.log('Areas array length ' + areas.length);
console.log('Total surface area ' + surfaceArea);
