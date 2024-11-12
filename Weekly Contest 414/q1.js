/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
    let dateset = date.split('-')
    let ans = []
    dateset.forEach((s)=>{
        ans.push(parseInt(s).toString(2));
    })
    return ans.join('-')
};

date = '2024-05-11'
console.log(convertDateToBinary(date));

dectobin(int)