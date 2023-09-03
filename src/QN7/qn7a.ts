import * as fs from "fs";

const INPUT = fs.readFileSync('qn7-puzzle-input.txt', "utf8").split('\n');

// To store wire : calculation or result
/// i.e  x: 123, y: 465, d:x AND y, e: x OR y
let map = new Map<string,any>();

INPUT.forEach((line) => {
    
    line = line.replace('-> ','');
    let lineArray = line.trim().split(" ");
    // console.log(lineArray)
    if (lineArray.length === 2) {
        valueDeclaration(lineArray,map)
    } else {
        operationDeclaration(lineArray, map)
    }

})
function valueDeclaration(split: any[], wires: Map<string,any>) {
    // console.log(wires.size)
    if (split[0].trim().match(/(\d+)/)) {
        wires.set(split[1], parseInt(split[0]))
    } else {
        wires.set(split[1], split[0])
    }
    // console.log(wires.size)
}

function operationDeclaration(split: any[], wires:Map<string,any>) {
    if (split.includes('NOT')) {
        wires.set( split[2], 'NOT ' + split[1] )
        // console.log(wires.size)
    } else {
        wires.set(split[3], split[0] + ' ' + split[1] + ' '+ split[2])
        // console.log(wires.size)
    }
}
function operation(a: number, b: number, c: string) : number {
    switch (c) {
        case 'ADD' :
            return a & b
        case 'OR' :
            return a | b
        case 'LSHIFT' :
            return a << b
        case 'RSHIFT' :
            return a >> b
    }
}
console.log(map)

// Need to create a completed wire map

function calculation(key: string, value: any ) {
    // Already calculated we will not do

    // Need to get 
    // 'bx' => 'NOT bw',
    // 'jr' => 'jp RSHIFT 3',
    // 'hj' => 'hg AND hh',
    if (typeof(value) == "string") {
        if (value.match(/(\d+)/)) {
            map.set(key, parseInt(value))
        }
        else {
            let a = value.split(" ")
            if (a.length == 1) {
                if (typeof(map.get(a[0])) == 'number' ) {
                    map.set(key, map.get(a[0]))

                }else if (typeof(map.get(a[0])) == 'string') {
                    if (map.get(a[0]).match(/(\d+)/)) {
                        map.set(key, parseInt(map.get(a[0])))
                    } else {
                        map.set(key, value)
                        calculation(a[0], map.get(a[0]))
                    }

                }
                 else {
                    map.set(key, value)
                    calculation(a[0], map.get(a[0]))
                }   
            }
            else if (a.length == 2) {
                if (typeof(map.get(a[1])) == 'number' ) {
                    map.set(key, ~map.get(a[0]))
                }else if (typeof(map.get(a[1])) == 'string' ) {
                    if (map.get(a[1]).match(/(\d+)/)) {
                        map.set(key, ~parseInt(map.get(a[0])))
                    }
                    else {
                        map.set(key, value)
                        calculation(a[1], map.get(a[1]))
                    }
                }
                else {
                    map.set(key, value)
                    calculation(a[1], map.get(a[1]))
                }
            }
            else {
                if (a[0].match(/(\d+)/)) {
                    if (a[2].match(/(\d+)/)) {
                        map.set(key, operation(parseInt(a[0]), parseInt(a[2]), a[1]) )
                    } else if (map.get(a[2]) == 'number') {
                        map.set(key, operation(parseInt(a[0]), map.get(a[2]), a[1]))
                    } else {
                        map.set(key, value)
                        calculation(a[2], map.get(a[2]))
                    }
                } else if (map.has(a[0])) {
                    if (map.get(a[0]) == 'number'){
                        if (a[2].match(/(\d+)/)) {
                            map.set(key, operation(map.get(a[0]), parseInt(a[2]), a[1]) )
                        } else if (map.get(a[2]) == 'number') {
                            map.set(key, operation(map.get(a[0]), map.get(a[2]), a[1]))
                        } else {
                            map.set(key, value)
                            calculation(a[2], map.get(a[2]))
                        }   
                    } else if (map.get(a[0]) == 'string') {
                        if (map.get(a[0]).match(/(\d+)/)) {
                            map.set(key, map.get(a[0]) + ' ' + a[1] + ' ' + a[2] )
                            calculation(key, map.get(key))
                        } else if (map.get(a[0]).includes(' ')) {
                            map.set(key, value)
                            calculation(a[0], map.get(a[0]))
                        } else {
                            map.set(key, value)
                        }
                    }
                }
            }
        }
    }
}


map.forEach((value, key) => {
    calculation(key, value)
})
console.log('MAP AFTER CALCULATIONS')
console.log("=============================================================")
console.log(map)

