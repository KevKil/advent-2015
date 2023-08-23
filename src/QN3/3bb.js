"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var INPUT = fs.readFileSync('./src/QN3/qn3-puzzle-input.txt', 'utf8').split('');
var santax = 0, santay = 0, robotx = 0, roboty = 0;
var visited = [];
// Necessary to add a separator for coordinates or the set will resolve diferently ie 
// 00 WRONG 
// 0x0 CORRECT
for (var i = 0; i < INPUT.length; i++) {
    // Init the coordinates arrays with start position
    visited.push(santax.toString() + 'x' + santay.toString());
    visited.push(robotx.toString() + 'x' + roboty.toString());
    if (i % 2 === 0) {
        if (INPUT[i] === '^')
            santay++;
        if (INPUT[i] === 'v')
            santay--;
        if (INPUT[i] === '<')
            santax--;
        if (INPUT[i] === '>')
            santax++;
        visited.push(santax.toString() + 'x' + santay.toString());
    }
    if (i % 2 === 1) {
        if (INPUT[i] === '^')
            roboty++;
        if (INPUT[i] === 'v')
            roboty--;
        if (INPUT[i] === '<')
            robotx--;
        if (INPUT[i] === '>')
            robotx++;
        visited.push(robotx.toString() + 'x' + roboty.toString());
    }
}
var uniqueVisited = new Set(visited);
console.log(uniqueVisited.size);
