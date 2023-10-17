/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var shortestBeautifulSubstring = function (s, k) {
    let a = s.split("")
    let vcheck = arrCountValue(a);
    if (vcheck[1] < k) {
        return ""
    }
    // find all 1 index
    let oneIndex = []
    for (let i in a) {
        if (a[i] == 1) {
            oneIndex.push(i)
        }
    }
    var minLen = Number.MAX_SAFE_INTEGER
    var beauty = ""
    var minValue = ""
    for (let t = 0; t <= oneIndex.length - k; t++) {
        if (oneIndex[t + k - 1] - oneIndex[t] + 1 <= minLen) {
            minLen = (oneIndex[t + k - 1] - oneIndex[t]) + 1
            stmp = s.substring(oneIndex[t], oneIndex[t + k - 1] * 1 + 1)

            if (minValue == "" || stmp * 1 < minValue * 1) {
                minValue = stmp
                beauty = stmp
            }
        }
    }
    return beauty;
};

var arrCountValue = function (a) {
    cv = []
    a.forEach((v, i) => {
        cv[v] = cv[v] ? cv[v] + 1 : 1
    })
    return cv
}

s = "100011001"
k = 3

// s = '000'
// k = 1

// s = "1011"
// k = 2

s = "111111110010001010"
k = 11

// s = "110101000010110101"
// k = 3

console.log(shortestBeautifulSubstring(s, k))