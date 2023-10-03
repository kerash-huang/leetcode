

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    let nextSet = [newInterval[0], newInterval[1]];
    let stk = []
    let lastSet = null
    for (let i in intervals) {
        lastSet = lastSet === null ? intervals[i] : lastSet
        nextSet = nextSet === null ? intervals[i] : nextSet
        const a = lastSet[0]
        const b = lastSet[1]
        const an = nextSet[0]
        const bn = nextSet[1]
        switch (true) {
            case bn < a:
                // console.log('a', i)
                stk.push(nextSet)
                nextSet = null
                break;
            case an <= a && bn <= b:
                // console.log('b', i)
                lastSet[0] = an
                nextSet = null
                break;
            case an > a && bn < b:
                // console.log('c', i)
                nextSet = null
                break;
            case an >= b:
                // console.log('d', i)
                if (an != b) {
                    stk.push(lastSet)
                    lastSet = nextSet
                    nextSet = null
                } else {
                    lastSet[1] = bn
                    nextSet = null
                }
                break;
            case an >= a && bn >= b:
                // console.log('e', i)
                lastSet[1] = bn
                nextSet = null
                break;
            default:
                // console.log('f', i)
                lastSet = nextSet
                nextSet = null
                break;
        }
    }
    if (lastSet !== null) {
        stk.push(lastSet)
    }
    if (nextSet !== null) {
        stk.push(nextSet)
    }
    return stk
};

// record ans from solution
var insert = function (intervals, newInterval) {
    let [start, end] = newInterval;
    let left = [];
    let right = [];
    
    for (const interval of intervals) {
      const [first, last] = interval;
      
      // current interval is smaller than newInterval
      if (last < start) left.push(interval);
      
      // current interval is larger than newInterval
      else if (first > end) right.push(interval);
      
      // there is a overlap
      else {
        start = Math.min(start, first);
        end = Math.max(end, last);
      }
    }
    
    return [...left, [start, end], ...right]; 
  };

let _ = undefined;
let a = [[6, 7], [10, 12]];
let b = [2, 5];
// b = [2, 8]
a = [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]]
b = [1, 3]

// a = [[1, 5]]
// b = [0, 6]

console.log(JSON.stringify(insert(a, b)));