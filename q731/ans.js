
var MyCalendarTwo = function () {
    this.calenbook = {}
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function (start, end) {
    
};

calendar = new MyCalendarTwo()

let data = [[10, 20], [50, 60], [10, 40], [5, 15], [5, 10], [25, 55]];
let resall = []
data.forEach((v, i) => {
    res = calendar.book(v[0], v[1])
    resall.push(res)
})
console.log(resall)