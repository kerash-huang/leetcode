/** q20
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    var checkBox = {
        ')': '(',
        '}': '{',
        ']': '[',
    };
    var arr = s.split('')
    var stake = []
    for (let v of arr) {
        switch (v) {
            case '(':
            case '[':
            case '{':
                stake.push(v)
                break;
            default:
                var last_val = stake.pop()
                var last_check = checkBox[v]
                if (last_val != last_check) {
                    return false;
                }
        }
    }
    return stake.length ? false :true;
};

s = "()[{}}"
s = ")"
console.log(isValid(s))