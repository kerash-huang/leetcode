/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumStrongPairXor = function (nums) {
    nums = nums.sort((a, b) => b - a)

    let odd_mx_num = Number.MIN_SAFE_INTEGER // 奇數 相減數字最大
    let even_mn_num = Number.MAX_SAFE_INTEGER // 偶數 相減數字最小
    let odd_set = []
    let even_set = []
    for (var i in nums) {
        let a = nums[i]

        for (var j in nums) {
            let b = nums[j]
            if (a % 2 == 0) {
                if (b == a || a - b > even_mn_num) {
                    continue;
                } else if (Math.abs(a - b) <= Math.min(a, b)) {
                    even_mn_num = b - a
                    even_set = [a, b]
                }
            } else {
                if (b == a || a - b < odd_mx_num) {
                    continue;
                } else if (Math.abs(a - b) <= Math.min(a, b)) {
                    odd_mx_num = b - a
                    odd_set = [a, b]
                }
            }
            console.log(a, b)
        }
    }
    console.log(odd_set, even_set)
    let v1 = odd_set[0] ^ odd_set[1]
    let v2 = even_set[0] ^ even_set[1]
    return Math.max(v1, v2)

};
nums = [1, 2, 3, 4, 5]
// nums = [5, 6, 25, 30]
// nums = [10, 100]
// nums = [2, 3]
console.log(maximumStrongPairXor(nums))

