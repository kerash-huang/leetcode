/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function (days, meetings) {
    meetings = meetings.sort((d1s, d2s) => {
        return d1s[0] > d2s[0] ? 1 : -1
    })
    let nextBound = 0
    let res = 0
    meetings.forEach(dr => {
        if (nextBound == 0 && dr[0] != 1) {
            res += dr[0] - 1
        }
        else if (nextBound != 0 && nextBound + 1 < dr[0]) {
            res += dr[0] - nextBound - 1
        }
        if (dr[1] > nextBound) {
            nextBound = dr[1]
        }
        console.log("nb: " + nextBound, "res:" + res, dr)
    })
    return res + (days - nextBound)
    // return days - Object.keys(meet_days).length
};

days = 5, meetings = [[2, 4], [1, 3]]
days = 10, meetings = [[5, 7], [1, 3], [9, 10]]
days = 8, meetings = [[3,4],[4,8],[2,5],[3,8]]
console.log(countDays(days, meetings))