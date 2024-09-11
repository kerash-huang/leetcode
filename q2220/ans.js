/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function (start, goal) {
    let startBin = start.toString(2).split('')
    let goalBin = goal.toString(2).split('')
    let len1 = startBin.length
    let len2 = goalBin.length
    if (len1 < len2) {
        for (let i = 0; i < len2 - len1; i++) {
            startBin.unshift('0')
        }
    } else {
        for (let i = 0; i < len1 - len2; i++) {
            goalBin.unshift('0')
        }
    }
    startBin = startBin.reverse()
    goalBin = goalBin.reverse()
    let count = 0
    startBin.forEach((item, index) => {
        if (item !== goalBin[index]) {
            count++
        }
    })
    return count;
}

start = 10, goal = 7
start = 3, goal = 4
console.log(minBitFlips(start, goal))