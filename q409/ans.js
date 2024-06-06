/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    var ss = {}
    for (let c of s) {
        ss[c] = ss[c] !== undefined ? ss[c] + 1 : 1
    }
    var count = 0
    var hasOdd = false
    for(const [k, v] of Object.entries(ss)) {
        count += Math.floor(v / 2) * 2
        if (v % 2 !== 0) {
            hasOdd = true
        } 
        
    }
    return count + (hasOdd ? 1 : 0);
}

s = "abccccdd"
s = "a"
s = "sss"
console.log(longestPalindrome(s))