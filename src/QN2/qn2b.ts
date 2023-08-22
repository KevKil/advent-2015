import * as fs from "fs";

const data = fs.readFileSync('./src/QN2/qn2-puzzle-input.txt','utf-8')
const lines = data.split('\n')
console.log("Number of lines " + lines.length)
let totalRibbon: number = 0;


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

    let ribbon = 2*(lowest+middle) + (highest*middle*lowest);
    // console.log(highest + ' ' + middle + ' ' + lowest + ' ' + ribbon)
    // areas.push(area);
    totalRibbon+= ribbon;
    // console.log(surfaceArea)

})
// console.log('Areas array length ' + areas.length)
console.log('Total surface area ' + totalRibbon)

