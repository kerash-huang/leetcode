/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function (word) {
    let words = word.split("");
    let tmp = []
    let rem = []
    words.forEach((val, i) => {
        console.log(val, val.charCodeAt())
        let rs = words.findLastIndex((e) => {
            return e.charCodeAt() == val.charCodeAt() - 32
        })
        if (rs >= 0 &&  i > rs)  {
            rem.push(val)
            return;
        } else if (rs >= 0) {
            tmp.push(val)
        }
    })
    tmp = [...new Set(tmp)];
    tmp = tmp.filter(x => !rem.includes(x));
    return tmp.length
};

word = 'aaAbcBC';
// word = 'AbBCab'
console.log(numberOfSpecialChars(word))