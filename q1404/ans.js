/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function (s) {
    let step = 0
    let sb = BigInt('0b' + s)
    while (sb != 1n) {
        if (sb % 2n == 0n) {
            sb = sb / 2n
        } else {
            sb += 1n;
        }
        step++;
    }
    return step;
};


s = "1101"
s = "1101101"
s = "10"
s = "1"
s = "1111011110000011100000110001011011110010111001010111110001"
// s = "10101"
console.log(numSteps(s));
// 16+4+1=21
// 22
// 11
// 12
// 6
// 3
// 4
// 2
// 1