/** 56. Merge Intervals
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => {
        return a[0] - b[0]
    });
    var newIntervals = []
    var tmp = []
    for (let ns of intervals) {
        var left = ns[0]
        var right = ns[1]
        if (tmp.length == 0) {
            tmp = [left, right]
        } else {
            if ((left >= tmp[0] && left <= tmp[1]) || (left >= tmp[0] && right <= tmp[1])) {
                var mleft = Math.min(left, tmp[0])
                var mright = Math.max(right, tmp[1])
                tmp = [mleft, mright]
            } else {
                newIntervals.push(tmp)
                tmp = [left, right]
            }
        }
    }
    if (tmp.length > 0) {
        newIntervals.push(tmp)
    }
    return newIntervals;
};
intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
// intervals = [[1, 4], [0, 4]]
// intervals = [[1, 4], [4, 5]]
// intervals = [[1, 4], [0, 1]]
// intervals = [[1, 4], [2, 3]]
console.log(merge(intervals))