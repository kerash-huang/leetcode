/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findXSum = function (nums, k, x) {
    ret = []
    for (let l = 0; l <= nums.length - k; l++) {
        let subq = nums.slice(l, k + l)
        let numC = countPerNum(subq)
        sortedKey = Object.keys(numC).sort((a, b) => {
            if (numC[a] > numC[b]) {
                return -1
            }
            if (numC[a] < numC[b]) {
                return 1
            }
            if (parseInt(a) > parseInt(b)) {
                return -1
            }
        })
        let res = 0
        for (let q = 0; q < sortedKey.length; q++) {
            let key = sortedKey[q]
            let value = numC[key]
            res += parseInt(key) * value
            if (q >= x - 1) {
                break
            }
        }
        ret.push(res)
    }
    return ret
};

var countPerNum = function (arr) {
    let count = {}
    arr.forEach((x) => {
        if (count[x]) {
            count[x] += 1
        } else {
            count[x] = 1
        }
    })
    return count
}


nums = [1, 1, 2, 2, 3, 4, 2, 3], k = 6, x = 2
nums = [9, 2, 2], k = 3, x = 3
nums = [1, 1, 2, 2, 3, 4, 2, 3], k = 6, x = 2
nums = [2,4,7,10,10] , k = 3 , x = 1
console.log(findXSum(nums, k, x)) // [1,2,3,4]