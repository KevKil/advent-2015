import * as fs from "fs";


// Create an array of 1000 * 1000 filled with 0 for off

const size = 1000, off = 0, on = 1;

// let lights = Array(size).fill().map(() => Array(size).fill(off));
let lights = Array.from({length: size}, () => new Array(size).fill(off));

console.log(lights.length)
console.log(lights[0].length)

const INPUT = fs.readFileSync('./src/QN6/qn6-puzzle-input', "utf8").split('\n');
const regex : RegExp = /(\d+)(,\d+)/g
INPUT.forEach(line => {

    // Read number pairs in line
    let pair;
    pair = line.match(regex); 

    if (pair && line.toLowerCase().includes("turn on")) turnOn(pair,lights);
    if (pair && line.toLowerCase().includes("turn off")) turnOn(pair,lights);
    if (pair && line.toLowerCase().includes("toggle")) turnOn(pair,lights);

})


function turnOn(pair: string[], lights : any[][] ) : void {}

function turnOff(pair: string[], lights : any[][] ) : void {}

function toggle(pair: string[], lights : any[][] ) : void {}