import { Md5 } from "ts-md5";

const salt = 'yzbqklnj';
let hashResult;
// Start counter at -1 since increment wil increase by 1 to start with 0
let i = -1;
do {
    i++;
    hashResult = Md5.hashStr(salt.concat(i.toString()))
    hashResult
} while (!hashResult.toString().startsWith('000000'));


console.log(i)
console.log(hashResult)