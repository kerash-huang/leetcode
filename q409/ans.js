/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let sb = {}
    for(let c of s) {
        sb[c] = sb[c] ? sb[c]+1 : 1
    }  
    console.log(sb)
};

s = "aajaksldj"
longestPalindrome(s)