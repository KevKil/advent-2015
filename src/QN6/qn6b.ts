import * as fs from "fs";

// Create an array of 1000 * 1000 filled with 0 for off
const size = 1000, off = 0, on = 1;

let lights = Array.from({length: size}, () => new Array(size).fill(off));

console.log(lights.length)
console.log(lights[0].length)

const INPUT = fs.readFileSync('qn6-puzzle-input.txt', "utf8").split('\n');
// This Regex will get the coordinates as [a, b][c,d]
const regex : RegExp = /(\d+)(,\d+)/g
INPUT.forEach(line => {

    // Read number pairs in line
    let pair;
    pair = line.match(regex); 

    // Convert cordinates to a singlr string array
    if (pair != null) {
        let coorinates = pair[0].split(",").concat(pair[1].split(","));
        if (coorinates && line.toLowerCase().includes("turn on")) turnOn(coorinates,lights);
        if (coorinates && line.toLowerCase().includes("turn off")) turnOff(coorinates,lights);
        if (coorinates && line.toLowerCase().includes("toggle")) toggle(coorinates,lights);
    }
})

/// The y position gets the index of the row
/// The x position gets the contents of the indexed row
//// Thus to get row = lights[y]
//// and to get content of row = lights[y][x]
// Coordinates are retreived in [x,y]

function turnOn(coordinates: string[], grid : any[][] ) : void {
    for (let y = +coordinates[1]; y <= +coordinates[3]; y++) {
        for (let x = +coordinates[0]; x <= +coordinates[2]; x++) {
            grid[y][x] += 1;
        }
    }
}
function turnOff(coordinates: string[], grid : any[][] ) : void {
    for (let y = +coordinates[1]; y <= +coordinates[3]; y++) {
        for (let x = +coordinates[0]; x <= +coordinates[2]; x++) {
            if (grid[y][x] != 0) {
                grid[y][x] -= 1;
            }
            
        }
    }
}

function toggle(coordinates: string[], grid : any[][] ) : void {
    for (let y = +coordinates[1]; y <= +coordinates[3]; y++) {
        for (let x = +coordinates[0]; x <= +coordinates[2]; x++) {
            grid[y][x] += 2;
        }
    }
}

const brightness = lights.flat().reduce((bright, light) => bright + light, 0);
console.log(brightness);