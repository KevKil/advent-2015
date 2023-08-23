"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var file = fs.readFileSync('./src/QN3/qn3-puzzle-input.txt', 'utf8').split('');
var santax = 0;
var santay = 0;
var robox = 0;
var roboy = 0;
var santaVisited = [];
var roboSantaVisited = [];
// Split santa directions and robot santa directions
var santaDirections = file.filter(function (item, index) { return index % 2 === 0; });
var roboSantaDirections = file.filter(function (item, index) { return index % 2 === 1; });
// console.log(santaDirections.length)
// console.log(roboSantaDirections.length)
// console.log(file.length)
// // Starting here where [0,0] 
// console.log("Santa init");
// // santaDirection.push(file[i]);
// santaVisited.push(santax.toString() + santay.toString());
// console.log("Robo santa init");
// // roboSantaDirection.push(file[i]);
// roboSantaVisited.push(robox.toString() + roboy.toString())
function getCoordinateArray(arr) {
    var x = 0, y = 0;
    var coordinateArray = [];
    coordinateArray.push(x + 'x' + y);
    arr.forEach(function (element) {
        if (element === '^')
            y++;
        if (element === 'v')
            y--;
        if (element === '<')
            x--;
        if (element === '>')
            x++;
        coordinateArray.push(x + 'x' + y);
    });
    return coordinateArray;
}
var santaCordinates = getCoordinateArray(santaDirections);
var robotCoordinates = getCoordinateArray(roboSantaDirections);
// console.log(santaCordinates[0])
// console.log(santaCordinates[1])
// console.log(robotCoordinates[0])
// console.log(robotCoordinates[1])
var total = new Set(santaCordinates.concat(robotCoordinates));
console.log(total.size);
// console.log(file[0]);
// console.log(file[1]);
// for (let i = 0; i < file.length; i++) {
//     //sample size of 10 directions
//     if (i%2 === 0) {
//         // Moving santa
//         console.log(i);
//         if (file[i] === '^') {
//             console.log(file[i] + 'santa moved up');
//             santay += 1;
//         }
//         if (file[i] === 'v') {
//             console.log(file[i] + 'santa moved down');
//             santay -= 1;
//         }
//         if (file[i] === '<') {
//             console.log(file[i] + 'santa moved left');
//             santax -= 1;
//         }
//         if (file[i] === '>') {
//             console.log(file[i] + 'santa moved right');
//             santax += 1;
//         }
//         santaDirection.push(file[i]);
//         santaSet.push(santax.toString() + santay.toString()); ;
//     }
//     if (i%2 === 1) {
//         // Moving robo santa
//         if (file[i] === '^') {
//             console.log(file[i] + 'robot santa moved up');
//             roboy += 1;
//         }
//         if (file[i] === 'v') {
//             console.log(file[i] + 'robot santa moved down');
//             roboy -= 1;
//         }
//         if (file[i] === '<') {
//             console.log(file[i] + 'robot santa moved left');
//             robox -= 1;
//         }
//         if (file[i] === '>') {
//             console.log(file[i] + 'robot santa moved right');
//             robox += 1;
//         }
//         roboSantaDirection.push(file[i]);
//         roboSantaSet.push(robox.toString() + roboy.toString());
//     }
//     // console.log(santaDirection);
//     // console.log(roboSantaDirection);
//     // console.log(santaSet)
//     // console.log(roboSantaSet)
// }
// console.log(santaSet.length);
// console.log(roboSantaSet.length);
// const total = new Set(santaSet.concat(roboSantaSet))
// console.log(total.size)
// // for (let i = 0; i <file.length; i++) {
// //     if (i%2 !== 0) {
// //         console.log("Santa " + file[i]);
// //         santaDirection.push(file[i]);
// //         // Moving santa
// //         if (file[i] === '^') {
// //         santax += 1;
// //         }
// //         if (file[i] === 'v') {
// //             santax -= 1;
// //         }
// //         if (file[i] === '<') {
// //             santay -= 1;
// //         }
// //         if (file[i] === '>') {
// //             santay += 1;
// //         }
// //         santaSet.add(santax.toString() + santay.toString());
// //     } else {
// //         console.log("Robo santa " + file[i]);
// //         roboSantaDirection.push(file[i]);
// //         // Moving roboSanta
// //         if (file[i] === '^') {
// //         robox += 1;
// //         }
// //         if (file[i] === 'v') {
// //             roboy -= 1;
// //         }
// //         if (file[i] === '<') {
// //             roboy -= 1;
// //         }
// //         if (file[i] === '>') {
// //             roboy += 1;
// //         }
// //         roboSantaSet.add(robox.toString() + roboy.toString())
// //     }
// // }
// // console.log("Santa set "+santaSet.size)
// // console.log("Robo santa set "+roboSantaSet.size)
// // let total = santaSet.size + roboSantaSet.size;
// // console.log("Houses visited a least once " + total)
// // console.log(santaDirection);
// // console.log(roboSantaDirection);
