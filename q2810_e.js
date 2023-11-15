/** q2810
 * @param {string} s
 * @return {string}
 */
var finalString = function (s) {
    let s2 = s.split('i')
    let ret = s2.reduce((previewValue, currencValue) => {
        return previewValue.split('').reverse().join("") + currencValue
    }, '')
    return ret

};

var finalString = function (s) {
    let s2 = s.split('')
    let buck = []
    s2.map((v, i) => {
        if (v === 'i') {
            buck.reverse()
        } else {
            buck.push(v)
        }
    })
    return buck.join('')
};

s = 'string'
console.log(finalString(s))