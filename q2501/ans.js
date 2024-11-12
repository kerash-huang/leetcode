/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSquareStreak = function (nums) {
    let hx = {}
    nums.forEach((num) => {
        hx[num] = 0;
    });

    let max = nums.reduce((a, b) => a > b ? a : b)

    nums.forEach((num) => {
        let tmp = num
        if(hx[num] >= 1) {
            return;
        }
        while (tmp <= max) {
            if (typeof hx[tmp] !== 'undefined') {
                hx[num]++;
            } else {
                break;
            }
            tmp = tmp * tmp
        }
    });
    console.log(hx)
    // find max value in hx
    let maxVal = 0;
    for (let key in hx) {
        if (hx[key] > maxVal) {
            maxVal = hx[key]
        }
    }
    console.log(maxVal)

    return maxVal > 1 ? maxVal : -1;
};


nums = [4, 3, 6, 16, 8, 2]
nums = [2, 3, 5, 6, 7]
// nums = [2, 2]

nums = [10, 2, 13, 16, 8, 9, 13]
console.log(longestSquareStreak(nums))