/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
    words = words.map((word) => { return word.split('').sort() });
    words = words.sort((a, b) => a.length - b.length)
    let first = words[0]
    let res = []
    for (let c of first) {
        let isCommon = true
        for (let i = 1; i < words.length; i++) {
            if (words[i].indexOf(c) === -1) {
                isCommon = false
                break
            }
            words[i].splice(words[i].indexOf(c), 1)
        }
        if (isCommon) res.push(c)
    }
    return res;
};


words = ["bella", "label", "roller"]
// words = ["cool", "lock", "cook"]
console.log(commonChars(words))