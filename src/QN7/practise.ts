import * as fs from "fs";

const INPUT = fs.readFileSync('qn7-puzzle-input.txt', "utf8").split('\n');

// To store wire : calculation or result
/// i.e  x: 123, y: 465, d:x AND y, e: x OR y
let map = new Map<string,any>();

let finishMap = new Map<string,any>();

INPUT.forEach((line) => {
    
    line = line.replace('-> ','');
    let lineArray = line.trim().split(" ");
    console.log(lineArray)
    if (lineArray.length === 2) {
        valueDeclaration(lineArray,map)
    } else {
        operationDeclaration(lineArray, map)
    }

})
function valueDeclaration(split: any[], wires: Map<string,any>) {
    if (split[0].trim().match(/(\d+)/)) {
        wires.set(split[1], parseInt(split[0]))
    } else {
        wires.set(split[1], split[0])
    }
    console.log(wires.get(split[1]))
}

function operationDeclaration(split: any[], wires: Map<string,any>) {
    ///// NOT, x, -> , h

    if (split.includes('NOT')) {
        if (wires.has(split[1])) {
            if ( typeof(wires.get(split[1])) == 'number' ) {
                wires.set(split[2], 'NOT ' + wires.get(split[1]))
            } else if ( typeof(wires.get(split[1])) == 'string' ) {
                if (!wires.get(split[1]).includes(' ')) {
                    wires.set( split[2], 'NOT ' + wires.get(split[1]) )
                } else {
                    wires.set( split[2], 'NOT ' + split[1] )
                }
            }
        } else {
            wires.set( split[2], 'NOT ' + split[1] )
        }
    } else {
            ///// x, AND, y, d
        if (wires.has(split[0])) {
            if ( typeof(wires.get(split[0])) == 'number' ) {
                wires.set(split[3], wires.get(split[0]) + ' ' + split[1] + ' ' + split[2])
            } else if ( typeof(wires.get(split[0])) == 'string' ) {
                if (!wires.get(split[0]).includes(' ')) {
                    wires.set( split[3], wires.get(split[0]) + ' ' + split[1] + ' ' + split[2])  
                } else {
                    wires.set( split[3], split[0] + ' ' + split[1] + ' ' + split[2]) 
                }
            }
        }
        if (wires.has(split[2])) {
            if ( typeof(wires.get(split[2])) == 'number' ) {
                wires.set(split[3], split[0] + ' ' + split[1] + ' ' + wires.get(split[2]) )
            } else if ( typeof(wires.get(split[2])) == 'string' ) {
                if (!wires.get(split[2]).includes(' ')) {
                    wires.set( split[3], split[0] + ' ' + split[1] + ' ' + wires.get(split[2]))  
                } else {
                    wires.set( split[3], split[0] + ' ' + split[1] + ' ' + split[2]) 
                }
            }
        }

        
        
    }
}



function operation (split : any[], wires: Map<string,any>) {
    ///// NOT, x, -> , h
    ///// x, AND, y, -> , d
    console.log(split)
    let temp;
    let temp2;
    let getVal1;
    let getVal2;
    if (split.length == 3) {
        if (wires.has(split[1])) {
            getVal1 = wires.get(split[0]);
            if (typeof(getVal1) == 'number') {
                wires.set(split[2], ~getVal1)
            } else if (getVal1.match(/(\d+)/)) {
                wires.set(split[2], ~parseInt(getVal1))
            } else if (!getVal1.trim().includes(' ')){
                wires.set(split[2], split[0] + ' ' + getVal1)
            } else {
                wires.set(split[2], split[0] + ' ' + split[1]) 
            }
        } else {
            wires.set(split[2], split[0] + ' ' + split[1])
        }
        console.log(wires.get(split[2]))
    }
    else {
        // x, AND, y, d    
        
            // First check if values are numbers
        if (split[0].trim().match(/(\d+)/) && split[2].trim().match(/(\d+)/)){
            temp = parseInt(split[0])
            temp2 = parseInt(split[2])
        }
        // Check if values exist in map and is a number  
        else if (wires.has(split[0]) && wires.has(split[2])) {
            getVal1 = wires.get(split[0]);
            getVal2 = wires.get(split[2]);
            if (typeof(getVal1) == 'number' && typeof(getVal2) == "number") {
                temp = getVal1
                temp2 = getVal2
            } else if (typeof(getVal1) == 'number' && typeof(getVal2) == "string") {
                temp = getVal1;
                if (getVal2.match(/(\d+)/)) {
                    temp2 = parseInt(getVal2)
                }
                else if (!getVal2.trim().includes(' ')){
                    wires.set(split[3], getVal1 + ' ' + split[1] + ' '+ getVal2)
                }
                else {
                    wires.set(split[3], getVal1 + ' ' + split[1] + ' '+ split[2])
                }
            } else if (typeof(getVal1) == 'string' && typeof(getVal2) == "number") {
                temp2 = getVal2
                if (getVal1.match(/(\d+)/)) {
                    temp = parseInt(getVal1)
                }
                else if (!getVal1.trim().includes(' ')){
                    wires.set(split[3], getVal1 + ' ' + split[1] + ' '+ getVal2)
                }
                else {
                    wires.set(split[3], wires.get(split[0] + ' ' + split[1] + ' '+ getVal2) )
                }
            } else {
                // Both values are strings and are wires
                wires.set(split[3], wires.get(split[0] + ' ' + split[1] + ' '+ split[2]))
            }
        } 
        else if (wires.has(split[0]) && split[2].match(/(\d+)/)) {
            temp2 = parseInt(split[2])
            getVal1 = wires.get(split[0])

            if (typeof(getVal1) == "number") {
                temp = getVal1
            } else if (getVal1.trim().match(/(\d+)/)) {
                temp = parseInt(getVal1)
            }
            else if (!getVal1.trim().includes(' ')){
                wires.set(split[3], getVal1 + ' ' + split[1] + ' '+ temp2)
            }         
            else {
                wires.set(split[3], split[0] + ' ' + split[1] + ' '+ temp2)
            }
        }

        //     if (stringtemp.match(/(\d+)/) && stringtemp2.match(/(\d+)/)) {
        //         temp = parseInt(wires.get(split[0]))
        //         temp2 = parseInt(wires.get(split[2]))
        //     } 
        //     else if (wires.get(split[0]).match(/(\d+)/) && !wires.get(split[2]).match(/(\d+)/)) {
        //         wires.set(split[3], wires.get(split[0]) + ' ' + split[1] + ' '+ split[2] )
        //     } 
        //     else if  (!wires.get(split[0]).match(/(\d+)/) && wires.get(split[2]).match(/(\d+)/)) {
        //         wires.set(split[3], split[0] + ' '+ split[1] + ' '+ wires.get(split[2]) )
        //     } else {
        //         wires.set(split[3], split[0] + ' ' + split[1] + ' ' + split[2] )
        //     }
        // }
        // // Check if first value exists and second is a number
        // else if (wires.has(split[0]) && split[2].trim().match(/(\d+)/)) {
        //     temp2 = parseInt(split[2])
        //     if (wires.get(split[0]).match(/(\d+)/)) {
        //         temp = parseInt(wires.get(split[0]))
        //     } else {
        //         wires.set(split[3], split[0] + ' ' + split[1] + ' ' + split[2] )
        //     }
        // } 
        // else {
        //     wires.set(split[3], split[0] + ' ' + split[1] + ' ' + split[2] )
        // }

        if (temp != null && temp2 != null) {           
            let s;
            switch(split[1]) {
                ///// x, AND, y, -> , d
                case "AND":
                    console.log(temp + ' ' + temp2 + ' = ' + (temp & temp2))
                    s = (temp & temp2)
                    wires.set(split[3], s)
                    break;
                case 'OR':
                    console.log(temp + ' ' + temp2 + ' = ' + (temp | temp2))
                    s = (temp | temp2)
                    wires.set(split[3], s)
                    break;
                case 'LSHIFT':
                    console.log(temp + ' ' + temp2 + ' = ' + (temp << temp2))
                    s = (temp << temp2)
                    wires.set(split[3], (temp << temp2))
                    break;
                case 'RSHIFT':
                    console.log(temp + ' ' + temp2 + ' = ' + (temp >> temp2))
                    s = (temp >> temp2)
                    wires.set(split[3], (temp >> temp2))  
                    break;      
            }
        }
        console.log(wires.get(split[3]))



        // if (wires.has(split[0]) && wires.has(split[2])) {
        //     temp = parseInt(wires.get(split[0]))
        //     temp2 = parseInt(wires.get(split[2]))
        // }if (split[0].trim().match(/(\d+)/) && split[2].trim().match(/(\d+)/)){
        //     temp = parseInt(split[0])
        //     temp2 = parseInt(split[2])
        // }





        /// Check if the values exist in wires 
        // if (wires.has(split[0]) && wires.has(split[2])) {
        //     temp = parseInt(wires.get(split[0]))
        //     temp2 = parseInt(wires.get(split[2]))
        // } else if (!wires.has(split[0]) && wires.has(split[2])) {
        //     temp2 = parseInt(wires.get(split[2]))
        //     wires.set(split[3], split[0] + " " + split[1] + ' ' + temp2)
        // } else if (!wires.has(split[2]) && wires.has(split[0])) {
        //     temp = parseInt(wires.get(split[0]));
        //     wires.set(split[3], temp + " " + split[1] + ' '+ split[2])
        // } else {
        //     wires.set(split[3], split[0] + " " + split[1] + ' '+ split[2])
        // }
        // console.log(wires)
        // if (temp != null && temp2 != null) {
            
        //     let s;
        //     switch(split[1]) {
        //         ///// x, AND, y, -> , d
        //         case "AND":
        //             console.log(temp + ' ' + temp2 + ' = ' + (temp & temp2))
        //             s = (temp & temp2)
        //             wires.set(split[3], s)
        //         case 'OR':
        //             console.log(temp + ' ' + temp2 + ' = ' + (temp | temp2))
        //             s = (temp | temp2)
        //             wires.set(split[3], s)
        //         case 'LSHIFT':
        //             console.log(temp + ' ' + temp2 + ' = ' + (temp << temp2))
        //             s = (temp << temp2)
        //             wires.set(split[3], (temp << temp2))
        //         case 'RSHIFT':
        //             console.log(temp + ' ' + temp2 + ' = ' + (temp >> temp2))
        //             s = (temp >> temp2)
        //             wires.set(split[3], (temp >> temp2))        
        //     }
        // }
        // console.log(wires)

    } 
}
// for (let key of map) {
//     console.log(key)
// }\
// const iter = map.keys();
// console.log(iter)
// console.log(iter.next().value)
// console.log(map.get(iter.next().value))

// map.forEach((value, key) => {
//     console.log(key + ' ' + value)
//     if (typeof value == "string") {
//         if (value.trim().match(/(\d+)/)) {
//             map.set(key, parseInt(value.trim()))
//         } else if (!value.trim().includes(' ')) {
//             map.set(key, value)
//         } else {
//             let x = value.trim().split(' ')
//             if (x.length == 2) {valueDeclaration(x,map)}
//             else {operation(x,map)}
//         }
//     }
// })


// if (map.get(iter.next().value).match(/(\d+)/)) {
//     map.set(iter.next().value, parseInt(map.get(iter.next().value)))
// } else {
//     let x = iter.next().value.split(" ");
//     if (x == 2) { valueDeclaration(x, map)}
//     else {operation(x, map)}
    
// }
// map.forEach((v,k,m) => {
//     console.log(v)
//     if (typeof(v) == 'string') {
//         if (v.match(/(\d+)/)) {parseInt(v)}
//         else {
//             if (v.split(' ').length == 2) {
//                 valueDeclaration(v.split(' '),m)
//             } else {
//                 operation(v.split(' '),m)
//             }
//         }
//     }
    
// })

// map.forEach((v,k,m) => {
//     console.log(v)
//     if (typeof(v) == 'string') {
//         if (v.match(/(\d+)/)) {parseInt(v)}
//         else {
//             if (v.split(' ').length == 2) {
//                 console.log("Insidddeeeee")
//                 valueDeclaration(v.split(' '),m)
//             } else {
//                 console.log("Insidddeeeee 333333333333")
//                 operation(v.split(' '),m)
//             }
//         }
//     }
    
// })
// for (let [key, value] of map) {
//     console.log(map.get(key));
//     if (map.get(key).match(/(\d+)/)) {
//         valueDeclaration(map.get(key),map)
//     } else {
//         console.log(map.get(key));
//         operation(map.get(key).split(' '),map)
//     }
    
// }
// let otherMap = new Map<string,any>([
//     ['x', 123],['y',456],['d',(123 & 456)],
//     ['e',(123 | 456)], ['f', (123 << 2)],
//     ['g', (456 >> 2)], ['h', (~123)],
//     ['i',(~456)]
// ])

console.log(map)