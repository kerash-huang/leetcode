/** q2951
 * @param {number} money
 * @param {number} children
 * @return {number}
 */
var distMoney = function (money, children) {
    var moneySet = new Array(children).fill(1)
    money -= children;
    if (money < 0) {
        return -1;
    }
    for (let childIndex in moneySet) {
        var incr = money >= 7 ? 7 : money
        if (incr == 3) {
            incr--;
        }
        money -= incr
        moneySet[childIndex] += incr
    }
    countIndex = 0
    while (money > 0) {
        if (moneySet[countIndex] + money != 8) {
            moneySet[countIndex] += money;
            money = 0
        } else {
            moneySet[countIndex] += (money - 1)
            money = money - (money - 1);
        }
        countIndex++;
    }
    var count = moneySet.reduce((acc, val) => {
        if (val == 8) {
            acc++
        }
        return acc
    }, 0)
    return count;
};

// money = 1, children = 2
// money = 2, children = 2
// money = 20, children = 3
// money = 16, children = 2
// money = 13, children = 3
// money = 19, children = 2
money = 20, children = 3
// 8 11
console.log(distMoney(money, children))