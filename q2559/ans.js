/** q2559
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function (words, queries) {
    var vowel = ['a', 'e', 'i', 'o', 'u'];
    var list = new Array(words.length).fill(0)
    words.map((val, i) => {
        if (vowel.indexOf(val[0]) >= 0 && vowel.indexOf(val[val.length - 1]) >= 0) {
            list[i] = 1;
        }
    });
    list = [0].concat(list)
    for (i = 1; i < list.length; i++) {
        list[i] = list[i - 1] + list[i];
    }

    var ans = []
    queries.map((v, i) => {

        count = list[v[1] + 1] - list[v[0]];
        ans.push(count)
    });
    return ans;
};

words = ["aba", "bcb", "ece", "aa", "e"],
    queries = [[0, 2], [1, 4], [1, 1]]

// words = ["a", "e", "i"],
//     queries = [[0, 2], [0, 1], [2, 2]]

words = ["aae", "bca", "ac", "ouu"],
    queries = [[0, 2], [2, 3], [1, 1]]
console.log(vowelStrings(words, queries));