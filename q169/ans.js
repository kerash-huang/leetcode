/**
 * 
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    var obj = {}
    nums.forEach((v, i) => {
        obj[v] = typeof obj[v] != 'undefined' ? obj[v] + 1 : 1;
    })
    var val = Object.keys(obj).reduce(function (a, b) { return obj[a] > obj[b] ? a : b })
    return val;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    var obj = {}
    for (var i = 0; i < nums.length; i++) {
        let v = nums[i]
        obj[v] = typeof obj[v] != 'undefined' ? obj[v] + 1 : 1;
        if (obj[v] > nums.length / 2) {
            return v;
        }
    }
    return val;
};

// 神猛的解法, solution 看到的
var majorityElement = function (nums) {
    let count = 0
    let ele = 0
    for (let i = 0; i < nums.length; i++) {
        // console.log('ele=' + ele, 'count=' + count)
        if (count == 0) {
            ele = nums[i]
            count = 1
        } else if (ele == nums[i]) {
            count++
        } else {
            count--
        }
    }
    return ele;
}

n = [3, 2, 3];
// n = [2, 2, 1, 1, 1, 2, 2];
// n = [3, 3, 4];
n = [5, 3, 2, 6, 6, 6, 4, 3, 3, 3, 4, 3]
console.log(majorityElement(n))