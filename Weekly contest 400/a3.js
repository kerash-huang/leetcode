/**
 * @param {string} s
 * @return {string}
 */
var clearStars = function (s) {
    let dict = {}
    let s2 = ""
    for (let i = 0; i < s.length; i++) {
        c = s[i]
        if (c != '*') {
            dict[c] = dict[c] !== undefined ? dict[c] + 1 : 1
            s2 += c
        } else {
            
            let min1 = (Object.keys(dict).sort((c1, c2) => {
                return c1 > c2 ? 1 : -1
            }))[0]
            console.log(dict, min1)
            let pos = s2.lastIndexOf(min1)
            s2 = s2.slice(0, pos) + s2.slice(pos + 1);
            dict[min1]--
            if (dict[min1] == 0) {
                delete dict[min1]
            }

        }
    }
    return s2
};

s = 'aaba*'
// s = 'abc'
s = "d*o*"
console.log(clearStars(s))