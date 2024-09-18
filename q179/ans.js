/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums.sort((a, b) => {
        strA = a.toString()
        strB = b.toString()
        intA = parseInt(strA + strB)
        intB = parseInt(strB + strA)
        return intB - intA
    });
    res = nums.join("") + "";
    res = res.replace(/^0+/, "")
    res = res == "" ? "0" : res
    return res
};

nums = [3,30,34,5,9]
nums = [10,2]
// nums = [0,0,0,0]
// nums = [999999998,999999997,999999999]
console.log(largestNumber(nums))