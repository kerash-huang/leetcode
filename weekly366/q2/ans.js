/**
 * @param {number[]} processorTime
 * @param {number[]} tasks
 * @return {number}
 */
var minProcessingTime = function (processorTime, tasks) {
    processorTime.sort((a, b) => {
        return a - b;
    })
    tasks.sort((a, b) => {
        return b - a;
    })
    var useTimeSet = []
    var coreIndex = 0
    for (i = 0; i < tasks.length; i + 4) {
        let getTask = tasks.splice(0, 4)
        maxTime = Math.max.apply(Math, getTask);
        useTimeSet.push(maxTime + processorTime[coreIndex])
        coreIndex++
    }
    return Math.max.apply(Math, useTimeSet);
};


p = [8, 10]
t = [2, 3, 1, 2, 5, 8, 4, 3]

p =[10,20]
t = [2,3,1,2,5,8,4,3]
res = minProcessingTime(p, t)
console.log(res)