"use strict";
// If in a group of four no similar values (1 house is visited twice)
// If in grup of four there is an opposite pair break seq of four and 
//2 houses are visited
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var file = fs.readFileSync('./src/QN3/qn3-puzzle-input.txt', 'utf8');
// file.trim();
// let fileC = file.split("")
// // console.log(fileC);
// let homesVisited = 0;
// let directions = new Map();
// directions.set('^',1);
// directions.set('v',2);
// directions.set('<',3);
// directions.set('>',4);
// let opposite = new Map();
// opposite.set('^',2);
// opposite.set('v',1);
// opposite.set('>',3);
// opposite.set('<',4);
// let currentDirection;
// let rollingMap = new Map<number, number>();
// let loop = false;
// console.log(homesVisited);
// for (let i = 0; i < fileC.length - 1; i++) {
// // Start
// if (i === 0) {
//     homesVisited += 1
//     currentDirection = directions.get(fileC[0]);
//     rollingMap.set(currentDirection%4,currentDirection);
//     loop = false;
//     console.log('Starting iteration '+ fileC[0] + " Map size "+ rollingMap.size)
// } else if (currentDirection === opposite.get(fileC[i])){
//     currentDirection = directions.get(fileC[i]); 
//     rollingMap.clear()
//     rollingMap.set(currentDirection%4,currentDirection);
//     loop = false;
//     console.log('Repeat ' + fileC[i] + " Map size "+ rollingMap.size)
// } else if (currentDirection === directions.get(fileC[i])){
//     rollingMap.clear()
//     currentDirection = directions.get(fileC[i]);
//     rollingMap.set(currentDirection%4,currentDirection);
//     homesVisited += 1;
//     loop = false;
//     console.log("Going same direction " + fileC[i] + " Map size "+ rollingMap.size)
// } else if (loop) {
//     if (rollingMap.size === 4) { 
//         rollingMap.clear();
//         rollingMap.set(currentDirection%4,currentDirection);
//         console.log("Start of a new loop " + fileC[i] + " Map size "+ rollingMap.size)
//     }
//     if (currentDirection === directions.get(fileC[i - 2])) {
//         currentDirection = directions.get(fileC[i]);
//         rollingMap.set(currentDirection%4,currentDirection);
//         console.log("Home passed after loop " + fileC[i] + " Map size " + rollingMap.size)
//     } else {
//         currentDirection = directions.get(fileC[i]);
//         rollingMap.set(currentDirection%4,currentDirection);    
//         homesVisited += 1; 
//         loop = false;
//         console.log("Sequence after loop broken " + fileC[i] + " Map size "+ rollingMap.size)
//     }
// } else {  
//     // if (rollingList.length === 4) {
//     //     rollingList.shift();
//     //     rollingList.push(currentDirection);
//     // } else if (rollingList.length < 4) {
//     //     rollingList.push(currentDirection);
//     // }
//     if (rollingMap.size === 4) {
//         currentDirection = directions.get(fileC[i]);
//         rollingMap.clear();
//         rollingMap.set(currentDirection%4,currentDirection);
//         loop = true;
//         console.log("Loop closed " + fileC[i] + " Map size "+ rollingMap.size)
//     } else if (!rollingMap.has(directions.get(fileC[i])%4)) {
//         currentDirection = directions.get(fileC[i]);
//         rollingMap.set(currentDirection%4,currentDirection);
//         homesVisited += 1;
//         loop = false;
//         console.log("Adding to existing rolling loop" + fileC[i] + " Map size "+ rollingMap.size)
//     } else {
//         rollingMap.clear()
//         loop = false;
//         currentDirection = directions.get(fileC[i]);
//         rollingMap.set(currentDirection%4,currentDirection);
//         homesVisited += 1;
//         console.log("Did not make loop " + fileC[i] + " Map size "+ rollingMap.size + " " + rollingMap)
//     }
// } 
// // function getKey(currentDirection, i) {
// //     if (i < 3) {
// //         console.log('Still at beginning');
// //         return null;   
// //     }
// //     let current = directions.get(fileC[i]);
// //     let current_1 = directions.get(fileC[i - 1]);
// //     let current_2 = directions.get(fileC[i - 2]);
// //     let current_3 = directions.get(fileC[i - 3]);
// //     if
// }
// console.log(homesVisited);
var x = 0;
var y = 0;
var resultSet = new Set();
resultSet.add('00');
for (var _i = 0, file_1 = file; _i < file_1.length; _i++) {
    var char = file_1[_i];
    var currentString = void 0;
    if (char === '^') {
        x += 1;
    }
    if (char === 'v') {
        x -= 1;
    }
    if (char === '<') {
        y -= 1;
    }
    if (char === '>') {
        y += 1;
    }
    currentString = x.toString() + y.toString();
    console.log(x, y);
    resultSet.add(currentString);
}
console.log(resultSet.size);
