import * as fs from "fs";

const INPUT = fs.readFileSync('./src/QN3/qn3-puzzle-input.txt','utf8').split('')

let santax = 0,santay = 0,robotx = 0,roboty = 0;

let visited = [];

// Necessary to add a separator for coordinates or the set will resolve diferently ie 
// 00 WRONG 
// 0x0 CORRECT
for (let i = 0; i < INPUT.length; i++) {
    // Init the coordinates arrays with start position
    visited.push(santax.toString() +'x'+ santay.toString())
    visited.push(robotx.toString() +'x'+ roboty.toString())
    if (i % 2 === 0) {
        if (INPUT[i] === '^') santay++;
        if (INPUT[i] === 'v') santay--;
        if (INPUT[i] === '<') santax--;
        if (INPUT[i] === '>') santax++;
        visited.push(santax.toString() +'x'+ santay.toString())
    }
    if (i%2 === 1) {
        if (INPUT[i] === '^') roboty++;
        if (INPUT[i] === 'v') roboty--;
        if (INPUT[i] === '<') robotx--;
        if (INPUT[i] === '>') robotx++;
        visited.push(robotx.toString() +'x'+ roboty.toString())
    }
}

let uniqueVisited = new Set(visited);
console.log(uniqueVisited.size);