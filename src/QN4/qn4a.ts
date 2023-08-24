import { Md5 } from "ts-md5";
import { createHash } from "crypto";
let start = Date.now()
const salt = 'yzbqklnj';
let hashResult;
// Start counter at -1 since increment wil increase by 1 to start with 0
let i = -1;
do {
    i++;
    hashResult = Md5.hashStr(salt.concat(i.toString()))
} while (!hashResult.toString().startsWith('00000'));

// do {    hashResult

//     i++;
//     hashResult = createHash('md5').update(salt.concat(i.toString())).digest('hex')
// } while (!hashResult.toString().startsWith('00000'))

console.log(i)
console.log(hashResult)
let finish = Date.now() - start;
console.log(finish)

// ts-md5 is faster