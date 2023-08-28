import * as fs from 'fs';

const INPUT = fs.readFileSync('./src/QN5/qn5-puzzle-input.txt', 'utf8').split('\n');
let niceStrings = 0, notNiceStrings = 0;


INPUT.forEach(line => {

    if (checkInvalid(line) && checkVowelCount(line) && checkForDouble(line)) {
        niceStrings++;
    } else notNiceStrings++;
}
)

console.log('Total nice strings ' + niceStrings);
console.log('Total NOT nice strings ' + notNiceStrings);


function checkInvalid(myString: string) : boolean {
    if (myString.includes('ab') || myString.includes('cd') 
    || myString.includes('pq') || myString.includes('xy')) {
        return false;
    }
    return true;
}

function checkForDouble(myString : string) : boolean {
    for (var i = 0; i < myString.length - 1 ; i++) {
        if (myString[i] === myString[i + 1])  return true;
    }
    return false;
}

function checkVowelCount(myString: string) :  boolean {
    let count = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u']
    for (let i = 0; i < myString.length; i++ ) {
        if (vowels.includes(myString[i]) ) count +=1;
    }
    if (count >= 3) return true;
    return false;
}