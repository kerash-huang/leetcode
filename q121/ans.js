/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    var maxstk = new Array(prices.length);
    var minstk = new Array(prices.length);
    var maxP = Number.MIN_SAFE_INTEGER;
    for (var i = 0; i < prices.length; i++) {
        if (i == 0) {
            minstk[i] = prices[i]
        } else {
            if (minstk[i - 1] < prices[i]) {
                minstk[i] = minstk[i - 1]
            } else {
                minstk[i] = prices[i]
            }
        }
    }
    for (var i = prices.length - 1; i >= 0; i--) {
        if (i == prices.length - 1) {
            maxstk[i] = prices[i]
        } else {
            if (maxstk[i + 1] < prices[i]) {
                maxstk[i] = prices[i]
            } else {
                maxstk[i] = maxstk[i + 1]
            }
        }
    }
    for (var i = 0; i < prices.length; i++) {
        maxP = (maxstk[i] - minstk[i]) > maxP ? (maxstk[i] - minstk[i]) : maxP;
    }
    return maxP < 0 ? 0 : maxP;
};

var maxProfit = function (prices) {
    var mstk = []
    var maxP = Number.MIN_SAFE_INTEGER
    do {
        val = prices.shift();
        while (mstk.length && mstk[mstk.length - 1] > val) {
            mstk.pop()
        }
        if (mstk.length > 1 && val >= mstk[mstk.length - 1]) {
            mstk.pop();
        }
        mstk.push(val)
        if (mstk.length >= 2) {
            maxP = Math.max(mstk[1] - mstk[0], maxP)
        }
    } while (prices.length)
    return maxP < 0 ? 0 : maxP;
}

// 基本概念 看解答的，原本解題想太多，簡單就好
var maxProfit = function (prices) {
    let maxProfit = 0;
    let minPrice = prices[0];
    for (let i = 1; i < prices.length; i++) {
        const currentPrice = prices[i];
        const currentProfit = currentPrice - minPrice;
        if (currentProfit > maxProfit) {
            maxProfit = currentProfit;
        }
        if (currentPrice < minPrice) {
            minPrice = currentPrice;
        }
    }
    return maxProfit;
}

v = [7, 1, 5, 3, 6, 4]
v = [7, 6, 4, 3, 1];
v = [2, 1, 2, 1, 0, 1, 2]
v = [4, 0, 1, 0, 0, 0, 6, 1, 4]
console.log(maxProfit(v))