/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function (word) {
    if (word.length < 3) {
        return false;
    }
    var regex = /^[0-9A-Z]+$/i;
    if (!regex.test(word)) {
        return false;
    }
    let vowel = false;
    let consonant = false;
    word = word.replace(/\d/,"")
    if (word.match(/[AEIOU]/i)) {
        vowel = true
    }
    if (word.match(/[^AEIOU]/i)) {
        consonant = true
    }
    return vowel && consonant;
};


var isValid = function (word) {

}

// console.log(isValid('234Adas'));
console.log(isValid('UuE6'));