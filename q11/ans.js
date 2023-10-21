/** 11. Container With Most Water
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let lb = 0; rb = height.length - 1;
    let maxContain = 0;
    do {
        let wh = Math.min(height[lb], height[rb]);
        maxContain = Math.max(maxContain, wh * (rb - lb));
        if (wh == height[lb]) {
            lb++;
        } else {
            rb--;
        }
    } while (lb != rb);
    return maxContain;
};
height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
// height = [1, 1]
console.log(maxArea(height))