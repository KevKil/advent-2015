const s = "qwertyuiopupp"

let lights = Array.from({length: 1000}, () => new Array(1000).fill(0));

let set = 'turn off 499,499 through 500,500'.match(/(\d+)(,\d+)/g)

console.log(set)
console.log(set[0].split(','))
let x
if (set != null) {
    x = set[0].split(",").concat(set[1].split(","))

}

console.log(x)
console.log(lights[0][0] + ' ' + lights[499][0] + ' '+ lights[500][500])
for (let i = +x[0]; i <= +x[2]; i++) {

    for (let j = +x[1]; j <= +x[3]; j++) {
        lights[i][j] = 1

    }
}

console.log(lights[0][0] + ' ' + lights[499][0] + ' '+ lights[500][500])