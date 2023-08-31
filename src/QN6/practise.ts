
let l = Array.from({length: 3}, () => new Array(3).fill(0));
console.log(l);
console.log('=====================================')
// console.log(l[0].fill(1))
// console.log(l);
let lw = Array.from({length: 3}, () => new Array(3).fill(0));

let coords = ['0','0','2','0']

// y determines the row of the grid
// x determines the values of the row
// for (let y = coords[1]; y <= coords[3]; y++) {
//     console.log()
//     for (let x = coords[0]; x <= coords[2]; x++) {
//         lw[y][x] = 1;
//     }
// }
// console.log(lw)
// let xe =  new Uint8Array(3 * 3);
// console.log(xe);
// console.log(xe.length);
function turnOn(coordinates: string[], grid : any[][] ) : void {
    console.log("Before turn on " + grid[+coordinates[1]][+coordinates[0]]);
    for (let y = +coordinates[1]; y <= +coordinates[3]; y++) {
        console.log(grid[y])
        for (let x = +coordinates[0]; x <= +coordinates[2]; x++) {
            grid[y][x] = 1;
        }
        console.log(grid[y])
    }
    console.log("After turn on " + grid[+coordinates[1]][+coordinates[0]]);
}


function turnOff(coordinates: string[], grid : any[][] ) : void {
    console.log("Before turn off " + grid[+coordinates[1]][+coordinates[0]]);
    for (let y = +coordinates[1]; y <= +coordinates[3]; y++) {
        console.log(grid[y])
        for (let x = +coordinates[0]; x <= +coordinates[2]; x++) {
            grid[y][x] = 0;
        }
        console.log(grid[y])
    }
    console.log("After turn off " + grid[+coordinates[1]][+coordinates[0]]);
}

function toggle(coordinates: string[], grid : any[][] ) : void {
    console.log("Before toggle " + grid[+coordinates[1]][+coordinates[0]]);
    for (let y = +coordinates[1]; y <= +coordinates[3]; y++) {
        console.log(grid[y])
        for (let x = +coordinates[0]; x <= +coordinates[2]; x++) {
            console.log ("current " + grid[y][x])
            if (grid[y][x] == 1) {
                grid[y][x] = 0;
            } else {
                grid[y][x] = 1;
            }
            console.log ("toggled " + grid[y][x])
        }
        console.log(grid[y])
    }
    console.log("After toggle " + grid[+coordinates[1]][+coordinates[0]]);
}

turnOn(['0','0','2','2'],l)
console.log(l);
console.log('==============TURNED ON ALL=======================')

turnOff(["0","0","2",'1'],l)
console.log(l);
console.log('==============TURNED OFF ROW AT INDEX 0 AND 1=======================')

toggle(["0","0","1",'2'],l)
console.log(l);
console.log('==============TOGGLE ROW AT INDEX 1=======================')