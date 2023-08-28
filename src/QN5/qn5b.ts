import * as fs from 'fs';

const INPUT = fs.readFileSync('./src/QN5/qn5-puzzle-input.txt', 'utf8').split('\n');
let niceStrings = 0, notNiceStrings = 0;


INPUT.forEach(line => {

    if (checkForPairs(line) && checkForDuplicates(line)) {
        niceStrings++;
    } else {
        notNiceStrings++};
}
)

console.log('Total nice strings ' + niceStrings);
console.log('Total NOT nice strings ' + notNiceStrings);

function checkForPairs(myString: string) : boolean {
    for (let i = 0; i < myString.length-2; i++) {
        let tempString;
        let checkString;

        checkString = myString.slice(i, i + 2) 

        // Handle case at index 0
        // In slice second numer is exclusive
        if (i === 0) { tempString = myString.slice(2); }
        // Need to add filer in between the removed string to avoid false positives
        else { tempString = myString.slice(0,i) + ' ' + myString.slice(i+2)}

        if (tempString.includes(checkString)) {
            return true
        }
    }
    return false;
   
}

function checkForDuplicates(myString: string) : boolean {
    for (let i = 0; i < myString.length-2; i++) {
        if ((myString[i] === myString[i+2])) {
            return true};
    }
    return false;
}