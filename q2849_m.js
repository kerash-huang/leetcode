/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumElementAfterDecrementingAndRearranging = function (arr) {
    if (arr.length == 1) {
        return 1;
    }
    arr.sort((a, b) => a - b)
    let index = 0
    if (arr[index] != 1) {
        arr[index] = 1
    }

    do {
        if (Math.abs(arr[index] - arr[index + 1]) <= 1) {
            index++
        } else {
            arr[index + 1] = arr[index] + 1
            index++
        }
    } while (index < arr.length - 1)
    return arr.pop();
    /*let index = 0;
    do {
        if (arr[0] != 1) {
            let find1 = arr.find(1);
            if (find1) {
                [arr[0], arr[find1]] = [arr[find1], arr[0]]
            }
            arr.sort((a, b) => a - b);
            if (arr[index] != 1) {
                arr[index] = 1
            }
        } else {
            if (Math.abs(arr[index] - arr[index + 1]) <= 1) {
                index++;
            } else {
                if(arr[index+1] > arr[index+2]) {

                }
            }
        }
    } while (index + 1 < arr.length);*/
};

arr = [2, 2, 1, 2, 1]
arr = [100, 1, 1000]
arr = [1, 2, 3, 4, 5]
arr = [91205]
console.log(maximumElementAfterDecrementingAndRearranging(arr))