/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function(word) {
    let comp = ""
    let tmpWord = ""
    let tmpCount = 0
    do {
        let fw = word[0]
        console.log(tmpWord, fw, comp)
        if((tmpWord != "" && fw != tmpWord) || tmpCoun == 9) {
            comp += tmpCount + tmpWord
            tmpWord = fw
            tmpCount = 0
        }
        tmpWord = fw
        word = word.substring(1);
        tmpCount++
    } while(word.length>0)
    comp += tmpCount + tmpWord
    return comp;
};

word = "abcde"
word = "aaaaaaaaaaaaaabb"
console.log(compressedString(word));
