import * as fs from 'fs';

const fileName: string = './QN1/qn1-puzzle-input.txt';

let fileContent = fs.readFileSync(fileName, 'utf8');
// console.log(fileContent);


let floor: number = 0;
const basement: number = -1;
console.log("Number of brackets " + fileContent.length);
let flag = false;
let i = 0;

for (let i = 0; i < fileContent.length; i++) {
    if (floor === basement) {
        console.log("Current position " + i)
        break;
    }
    if (fileContent[i] === '(') {floor+=1}
    if (fileContent[i] === ')') {floor-=1}
}
console.log(floor);