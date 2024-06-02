var minimumChairs = function (s) {
    let chairSet = [0]
    for (let i = 0; i < s.length; i++) {
        if (s[i] == 'E') {
            if (chairSet.indexOf(0) >= 0) {
                chairSet[chairSet.indexOf(0)] = 1
            } else {
                chairSet.push(1)
            }
        }
        else if (s[i] == 'L') {
            chairSet[chairSet.lastIndexOf(1)] = 0
        }
        console.log(chairSet)
    }
    return chairSet.length
};


s = "ELELEEL"
s = "EELELLEEE"
console.log(minimumChairs(s))
