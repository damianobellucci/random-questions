let rand = null
/* for (let i = 0; i < 1000000000; i++) {
    let number = Math.random()
    if (number < 0.001) {
        rand = number
        break
    }
}
console.log(2 * rand / 100) */
//math.rand genera numeri anche 0.0004 quindi se lo vado a moltipliacare per 100 troverò 0.04

let start = new Date().getTime()
for (let i = 0; i < 1000000000; i++) {
    Math.random()
}
let end = new Date().getTime()
let time = end - start
console.log(time)

