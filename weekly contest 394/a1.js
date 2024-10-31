/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function (word) {
    let words = word.split("")
    let tmp = []
    let res = []
    for (let i = 0; i < words.length; i++) {
        tmp.push(words[i].charCodeAt())
    }
    tmp.forEach((v, i) => {
        if (tmp.indexOf(v - 32) >= 0) {
            res.push(v)
        }
    })
    let r = []
    res.forEach((v) => {
        if (r.indexOf(String.fromCharCode(v)) < 0) {
            r.push(String.fromCharCode(v))
        }
    })
    return r.length
};

word = 'aaAbcBC';
console.log(numberOfSpecialChars(word))