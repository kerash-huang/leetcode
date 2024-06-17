/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
    if(Math.sqrt(c) % 1 == 0) return true;
    var mid = Math.floor(Math.sqrt(c - 1))
    var min = Math.sqrt(c - Math.pow(mid, 2));
    console.log(mid, min)
    if (min % 1 == 0) return true;
    for (var i = mid; i >= min; i--) {
        var min = Math.sqrt(c - Math.pow(i, 2));
        if (min % 1 == 0) return true;
    }
    return false;
};


c = 5;
c = 3;
c = 14;
c = 82;
c = 8;
console.log(judgeSquareSum(c));