"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var data = fs.readFileSync('./src/QN2/qn2-puzzle-input.txt', 'utf-8');
var lines = data.split('\n');
console.log("Number of lines " + lines.length);
var totalRibbon = 0;
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
    var ribbon = 2 * (lowest + middle) + (highest * middle * lowest);
    // console.log(highest + ' ' + middle + ' ' + lowest + ' ' + ribbon)
    // areas.push(area);
    totalRibbon += ribbon;
    // console.log(surfaceArea)
});
// console.log('Areas array length ' + areas.length)
console.log('Total surface area ' + totalRibbon);
