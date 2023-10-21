/** 746. Min Cost Climbing Stairs
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    var dp = []
    dp[cost.length] = 0;
    dp[cost.length - 1] = cost[cost.length - 1];
    for (let s = cost.length - 2; s >= 0; s--) {
        dp[s] = cost[s] + Math.min(dp[s + 1], dp[s + 2])
    }
    return Math.min(dp[0], dp[1])
};
cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
console.log(minCostClimbingStairs(cost))