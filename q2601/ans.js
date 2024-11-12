/**
 * @param {number[]} nums
 * @return {boolean}
 */
var primeSubOperation = function (nums) {
    let primeList = new Array(1000).fill(false)
    for (s = 2; s < 1000; s++) {
        isPrime = true;
        for (e = 2; e <= s / 2; ++e) {
            if (s % e == 0) {
                isPrime = false
                break;
            }
        }
        primeList[s] = isPrime;
    }

    for (i = 0; i < nums.length; i++) {
        if (i == 0) {
            last = 0;
        } else {
            last = nums[i - 1]
        }
        for (targ = last + 1; targ < nums[i]; targ++) {
            let diff = Math.abs(nums[i] - targ);
            if (primeList[diff]) {
                nums[i] = targ
            }
        }
        if (nums[i] <= nums[i - 1]) {
            return false;
        }
    }
    return true;
};

nums = [2, 2]
// nums = [998, 2]
// nums = [4, 9, 6, 10]
// nums = [6, 8, 11, 12]
// nums = [5,8,3]
// nums = [8, 19, 3, 4, 9]
// nums = [11, 2, 10, 15, 19]
console.log(primeSubOperation(nums)) // true