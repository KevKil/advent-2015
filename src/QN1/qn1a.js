"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var fileName = './src/QN1/qn1-puzzle-input.txt';
var fileContent = fs.readFileSync(fileName, 'utf8');
// console.log(fileContent);
var floor = 0;
var basement = -1;
console.log("Number of brackets " + fileContent.length);
var flag = false;
var i = 0;
for (var i_1 = 0; i_1 < fileContent.length; i_1++) {
    if (floor === basement) {
        console.log("Current position " + i_1);
        break;
    }
    if (fileContent[i_1] === '(') {
        floor += 1;
    }
    if (fileContent[i_1] === ')') {
        floor -= 1;
    }
}
console.log(floor);
