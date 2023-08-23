import * as fs from "fs";

const file = fs.readFileSync('./src/QN3/qn3-puzzle-input.txt', 'utf8').split('');

// Split santa directions and robot santa directions
const santaDirections = file.filter((item, index) => index % 2 === 0);
const roboSantaDirections = file.filter((item, index) => index % 2 === 1);

// Function to create the coordinates of the delivry path
function getCoordinateArray(arr: any[]) {
    let x = 0, y = 0;
    let coordinateArray: string[] = []
    coordinateArray.push(x + 'x' + y)
    arr.forEach(element => {
        if (element === '^') y++;
        if (element === 'v') y--;
        if (element === '<') x--;
        if (element === '>') x++;

        coordinateArray.push(x + 'x' + y)
    });
    return coordinateArray;
}

// Get santa coordinates
const santaCordinates = getCoordinateArray(santaDirections)

// Get robot coordinates
const robotCoordinates = getCoordinateArray(roboSantaDirections)

// console.log(santaCordinates[0])
// console.log(santaCordinates[1])
// console.log(robotCoordinates[0])
// console.log(robotCoordinates[1])

// Create a set to get distinct values from coordinates
const total = new Set(santaCordinates.concat(robotCoordinates))
console.log(total.size)
