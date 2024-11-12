/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    for (let i = 0; i <= Math.floor(s.length / 2) - 1; i++) {
        let a = s[i]
        let b = s[s.length - i - 1]
        s[i] = b; 
        s[s.length - i - 1 ] = a
    }
    return s
};
s = ["h", "e", "l", "l", "o"]
console.log(reverseString(s))