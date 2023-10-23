/** q342
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
    while (n >= 4) {
        n = n / 4
    } 
    return n == 1;
};
n = 16
console.log(isPowerOfFour(n))