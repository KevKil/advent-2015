import * as fs from "fs";
import * as rd from "readline";

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
const data = fs.readFileSync('./QN2/qn2-puzzle-input.txt','utf-8')
const lines = data.split('\n')
console.log("Number of lines " + lines.length)
let surfaceArea: number = 0;
let areas: number[] = []

lines.forEach(line => {
    line = line.trim();
    let numArray = line.split('x');
    let firstNumber = parseFloat(numArray[0]);
    let secondNumber = parseFloat(numArray[1]);
    let thirdNumber = parseFloat(numArray[2]);

    let highest = Math.max(firstNumber,secondNumber,thirdNumber);
    let lowest = Math.min(firstNumber,secondNumber,thirdNumber);
    let middle: number;

    if (highest === firstNumber) {
        middle = Math.max(secondNumber,thirdNumber)
    } else if (highest === secondNumber) {
        middle = Math.max(firstNumber,thirdNumber)
    } else {
        middle = Math.max(secondNumber,firstNumber)
    }

    let area = (2*highest*middle) + (2*highest*lowest) + (2*middle*lowest) + (lowest*middle);
    // console.log(highest + ' ' + middle + ' ' + lowest + ' ' + area)
    areas.push(area);
    surfaceArea+= area;
    // console.log(surfaceArea)

})
console.log('Areas array length ' + areas.length)
console.log('Total surface area ' + surfaceArea)


